import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class RedirectLoggedUserGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private message: NzMessageService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.authenticated) {
      this.router.navigate(['/dashboard']);
      this.message.success('Vous êtes déja connecté, bienvenue.');
    }

    // Wait for first load situations
    return this.auth.authenticatedUser.pipe(
      map(user => !!user),
      take(1),
      map(allowed => {
        console.log('From redirect pipe ' + allowed);
        if (allowed) {
          this.router.navigate(['/dashboard']);
          this.message.success('Vous êtes déja connecté, bienvenue.');
          return false;
        }
        return true;
      })
    );
  }

}
