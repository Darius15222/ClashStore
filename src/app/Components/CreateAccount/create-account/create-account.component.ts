import { Component } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FormControl, Validators } from '@angular/forms';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  constructor(){}

  email : string = "";
  password  : string = "";
  hide : boolean = true;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  

  createAccount()
  {
    const app = initializeApp(environment.firebaseConfig);

    const auth = getAuth();
  createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
  }

}




