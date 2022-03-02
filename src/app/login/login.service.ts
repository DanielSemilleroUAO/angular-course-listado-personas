import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword, getAuth, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token!: string | null;

  constructor(
    private router: Router
  ) { }

  login(email: string, password: string) {
    signInWithEmailAndPassword(getAuth(), email, password)
      .then(response => {
        getAuth().currentUser?.getIdToken().then(
          token => {
            this.token = token;
            this.router.navigate(['/']);
          }
        );
      });
  }

  getIdToken() {
    return this.token;
  }

  isAutenticado() {
    return this.token != null;
  }

  logout() {
    signOut(getAuth()).then(
      () => {
        this.token = null;
        this.router.navigate(['login'])
      }
    ).catch(error => console.log(error))
  }

}
