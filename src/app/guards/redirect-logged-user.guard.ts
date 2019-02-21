import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RedirectLoggedUserGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.authenticated) {
      console.log('user authenticated');
      this.router.navigate(['/dashboard']);
      return false;
    }

    // Wait for first load situations
    return this.auth.authenticatedUser.pipe(
      map(user => !!user),
      take(1),
      tap(allowed => {
        console.log('From redirect pipe' + allowed);
        if (allowed) {
          this.router.navigate(['/dashboard']);
        }
      })
    );
  }

}
