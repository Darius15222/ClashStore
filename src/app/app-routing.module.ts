import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/HomeComponent/home/home.component';
import { CocComponent } from './Components/COC-Component/coc/coc.component';
import { CrComponent } from './Components/CR-Component/cr/cr.component';
import { LoginComponent } from './Components/LoginComponent/login/login.component';
import { CartComponent } from './Components/Cart/cart/cart.component';
import { CreateAccountComponent } from './Components/CreateAccount/create-account/create-account.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'clash-of-clans', component: CocComponent },
  { path: 'clash-royale', component: CrComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'create-account', component: CreateAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
