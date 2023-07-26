import { AccountService } from 'src/app/Services/AccountService/account.service';
import { CartServiceService } from './../../../Services/CartService/cart-service.service';
import { Component } from '@angular/core';

type product = {
  name: string,
  image : string,
  price : number,
  quantity : number
};

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  
  cartProducts : Array<product> = [];
  isConnected : boolean = false;

  constructor(public cartService: CartServiceService, accountService : AccountService){

    this.cartProducts =  cartService.getCartProducts();
    // console.log("CartProducts: ");
    // console.log(this.cartProducts);

        //cand se sterg toate comenzile sa nu se mai poata plasa comanda

    if(accountService.getConectat() == true)
        this.isConnected = true;

        // cartService.allOrders();
  }

  addQuantity(name : string)
  {
    this.cartService.addQuantity(name);
  }

  removeQuantity(name : string)
  {
    this.cartService.removeQuantity(name);
  }

  order()
  {
    this.cartService.order();
  }

  getTotal()
  {
    if(this.cartService.getTotal() <= 0)
      return 0;
    else 
      return this.cartService.getTotal().toFixed(2);
  }

  getEmptyOrder()
  {
    return this.cartService.getEmptyOrder();
  }

  getComandaPlasata()
  {
    return this.cartService.getComandaPlasata();
  }
}
