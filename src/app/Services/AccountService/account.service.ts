import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  email : string = "";
  conectat : boolean = false;
  
  getEmail()
  {
    return this.email;
  }

  setEmail(newEmail: string)
  {
    this.email = newEmail;
  }

  setContConectat()
  {
    this.conectat = true;
  }

  setContNeconectat()
  {
    this.conectat = false;
  }

  getConectat()
  {
    return this.conectat;
  }
  
  constructor() { }
}
