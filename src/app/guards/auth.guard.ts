import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map, take, tap } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private message: NzMessageService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.authenticated) { return true; }

    // Unauthenticated
    return this.auth.authenticatedUser.pipe(
      map(user => !!user),
      take(1),
      tap(allowed => {
        if (!allowed) {
          this.router.navigate(['/log-in']);
          this.message.warning('Connectez vous pour accéder a ce contenu.');
        }
      })
    );
  }

}
