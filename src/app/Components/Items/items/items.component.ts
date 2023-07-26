import { Component, Input } from '@angular/core';
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { environment } from '../../../../environments/environment.prod';
import { CartServiceService } from 'src/app/Services/CartService/cart-service.service';
import { AccountService } from 'src/app/Services/AccountService/account.service';


type pass = {
  backgroundImage : string,
  description: string,
  image : string,
  name : string,
  price : number,
};

type merch = {
  image : string,
  price : number,
  description : string,
};

type gems = {
  amount : string,
  backgroundImage : string,
  image : string,
  name : string,
  price : number,
};



@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
 
  @Input() pagina?: string;

  cocGem: string = "../../../../assets/coc_gem.webp";
  crGem: string = "../../../../assets/cr_gem.webp";

  gemImg: string = "";

  pass : Array<pass> = [];
  merch : Array<merch> = [];
  gems : Array<gems> = [];

  constructor(public cartService: CartServiceService, public accountService : AccountService){}

  ngOnInit()
  {
    this.getData();

    if(this.pagina == "coc")
      this.gemImg = this.cocGem;
    
    if(this.pagina == "cr")
      this.gemImg = this.crGem;
  } 

  alert : boolean = false;


  async functie()
  {
    await new Promise(f => setTimeout(f, 1000));

    const alerta = document.getElementById('alerta');
    alerta!.style.display = 'none';
    
    this.alert = false;
  }

  addToCart(nume : string, imagine : string, pret : number)
  {
    if(this.accountService.getConectat() == true)
    {
      this.cartService.addToCart(nume, imagine, pret);
    }
    else
    {
      this.alert = true;
      this.functie();
    }
  }

  async getData()
  {
    // Initialize Firebase
    const app = initializeApp(environment.firebaseConfig);

    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);

    const queryPass = await getDocs(collection(db, this.pagina + "-pass"));
      queryPass.forEach((docPass) => {
        this.pass.push(
          {
            backgroundImage : docPass.data()['backgroundImage'],
            description : docPass.data()['description'],
            image : docPass.data()['image'],
            name : docPass.data()['name'],
            price : docPass.data()['price'],
          }
        );
});

const queryMerch = await getDocs(collection(db, this.pagina + "-merch"));
queryMerch.forEach((docMerch) => {
  this.merch.push(
    {
      image: docMerch.data()['image'],
      price: docMerch.data()['price'],
      description : docMerch.data()['description']
    }
  );
});

const queryGems = await getDocs(collection(db, this.pagina + "-gems"));
queryGems.forEach((docGems) => {
  this.gems.push(
    {
      amount : docGems.data()['amount'],
      backgroundImage : docGems.data()['backgroundImage'],
      image : docGems.data()['image'],
      name : docGems.data()['name'],
      price : docGems.data()['price'],
    }
  );
});

  }








}
