import { AccountService } from './../AccountService/account.service';
import { environment } from '../../../environments/environment.prod'
import { Injectable, Input } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, query, setDoc, where } from 'firebase/firestore';
import { doc, getDoc, updateDoc, collection } from "firebase/firestore";

type product = {
  name: string,
  image : string,
  price : number,
  quantity : number
};


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(public accountService : AccountService) { }

  @Input() pagina?: string;

  productsFromDB : Array<product> = [];
  cartProducts : Array<product> = [];
  allOrders : any;
  empty : boolean = true;
  comandaPlasata : boolean = false;
  total : number = 0;

  ngOnInit()
  {
    this.getProductsFromDB();
  } 


  async getProductsFromDB()
  {
    // Initialize Firebase
    const app = initializeApp(environment.firebaseConfig);

    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);
    
    const docRef = doc(db, "carts", this.accountService.getEmail());
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      docSnap.data()['products'].forEach( (product : any) => { 
        this.productsFromDB.push(
          {
            image : product.image,
            price : product.price, 
            name : product.name,
            quantity : product.quantity
          }
        )
      });
      
      // console.log(this.products);
    } else {
    console.log("No such document!");
    }
  }

  addToCart(nume : string, imagine: string, pret : number )
  {
    let produsTemp : product = {
      name : nume,
      image : imagine, 
      price : pret,
      quantity : 1
    }
    this.total += produsTemp.price;

    if(this.cartProducts.some(produsTemp => produsTemp.name === nume))
    {
       let index : number = this.cartProducts.findIndex( produsTemp => produsTemp.name === nume);
       this.cartProducts[index].quantity++;
    }
    else
    {
      this.cartProducts.push(produsTemp);
    }

    if(this.cartProducts.length > 0)
    {
      this.setEmptyOrder(false);
      this.setComandaPlasata(false);
    }
  }

  getCartProducts()
  {
    return this.cartProducts;
  }


  // async getAllOrders()
  // {
  //    const app = initializeApp(environment.firebaseConfig);
  //   const db = getFirestore(app);
  //   let i = 0;
  //   const q = query(collection(db, "Comenzi"), where('email', '==', this.accountService.getEmail()));
  //   const querySnapshot = await getDocs(q);

  //   console.log("q: " + q);
  //   console.log("snapshot" + querySnapshot);
  //   // querySnapshot.forEach((doc) => {
  //   //   this.ServiciuConturiService.setNumarComenzi();
  //   //   this.Coduri.push(doc.id);
  //   //   this.Coduri.sort((one, two) => (one > two ? 1 : -1));

  //   //   this.Comenzi[i] = {
  //   //     Adresa: doc.data()['adresa'],
  //   //     Total: doc.data()['Total'],
  //   //     Plata: doc.data()['plata'],
  //   //     Data: doc.data()['Data'],
  //   //   };

  //   //   for (let j = 0; j < doc.data()['Produs'].length; j++) {
  //   //     this.ProduseDinComenzi[i].push({
  //   //       cantitate: doc.data()['Produs'][j].cantitate,
  //   //       numeimagine: doc.data()['Produs'][j].numeimagine,
  //   //       numeprodus: doc.data()['Produs'][j].numeprodus,
  //   //       pret: doc.data()['Produs'][j].pret,
  //   //     });
  //   //   }
  //   //   i++;
  //   // });

  // }

  async order()
  {
    //palce order

    // this.cartProducts.forEach((produs) => {
    //   this.total += produs.price * produs.quantity;
    // });

    const app = initializeApp(environment.firebaseConfig);

    const db = getFirestore(app);
    
    const document = doc(collection(db, "orders"));
    await setDoc(document, {
      pretTotal: this.total.toFixed(2),
      email: this.accountService.getEmail(),
    });

    let index=0;
    this.cartProducts.forEach((produs)  => {
      updateDoc(document, {
          [index]: {
          name: produs.name,
          image: produs.image,
          price: produs.price,
          quantity: produs.quantity
        }
    });
    index++;
    })

    this.cartProducts.splice(0);
    this.setComandaPlasata(true);
}
  addQuantity(nume : string)
  {
    if(this.cartProducts.some(produsTemp => produsTemp.name === nume))
    {
       let index : number = this.cartProducts.findIndex( produsTemp => produsTemp.name === nume);
       this.cartProducts[index].quantity++;
       this.total += this.cartProducts[index].price;
    }
  }

  removeQuantity(nume : string)
  {
    if(this.cartProducts.some(produsTemp => produsTemp.name === nume))
    {
       let index : number = this.cartProducts.findIndex( produsTemp => produsTemp.name === nume);

       this.cartProducts[index].quantity--;
       this.total -= this.cartProducts[index].price;

       if(this.cartProducts[index].quantity <= 0)
       {
        this.cartProducts.splice(index, 1);
       }
    }

    if(this.cartProducts.length == 0)
      this.setEmptyOrder(true);
  }

  getTotal()
  {
    return this.total;
  }

  getEmptyOrder()
  {
    return this.empty;
  }

  setEmptyOrder( empty : boolean)
  {
    this.empty = empty;
  }
  getComandaPlasata()
  {
    return this.comandaPlasata;
  }

  setComandaPlasata( comanda : boolean)
  {
    this.comandaPlasata = comanda;
  }

}

