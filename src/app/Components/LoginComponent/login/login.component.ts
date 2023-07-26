import { AccountService } from './../../../Services/AccountService/account.service';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { environment } from '../../../../environments/environment.prod';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email : string = "";
  password  : string = "";
  hide : boolean = true;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  // matcher = new MyErrorStateMatcher();
  
  constructor(public accountService : AccountService){}

  signIn(): void {
    const app = initializeApp(environment.firebaseConfig);
    const auth = getAuth();
  signInWithEmailAndPassword(auth, this.email, this.password)
    .then((userCredential) => {
    // Signed in 
    
    const user = userCredential.user;
    this.accountService.setContConectat();
    this.accountService.setEmail(this.email);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.accountService.setContNeconectat();
  });
  }

  signOut(){
      const auth = getAuth();
      signOut(auth).then(() => {
        this.accountService.setContNeconectat();
        this.accountService.setEmail("");
     // Sign-out successful.
      }).catch((error) => {
     // An error happened.
    });
  }


}
