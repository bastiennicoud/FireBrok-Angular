import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from 'firebase';

/**
 * This service regroups all firebase authentication logic
 * @author Bastien Nicoud
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /** Store current authentication state */
  private authState = null;
  /** Store authenticated user observable */
  private user: Observable<User>;

  constructor(private afAuth: AngularFireAuth) {
    // Get user observable
    this.user = afAuth.user;
    // Register an observer on the auth state
    this.afAuth.authState.subscribe(auth => {
      this.authState = auth;
    });
  }

  /**
   * Check current user authentication, return true if authenticated
   */
  get authenticated(): boolean {
    return this.authState !== null;
  }

  /**
   * Get current user datas if authenticated
   */
  get authenticatedUser(): Observable<User> {
    return this.user;
  }
}
