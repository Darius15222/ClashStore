import { Component } from '@angular/core';
import { AccountService } from './../../../Services/AccountService/account.service';
import { getAuth, signOut } from 'firebase/auth';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public accountService : AccountService){}

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
