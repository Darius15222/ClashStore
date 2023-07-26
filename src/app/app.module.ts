import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/HomeComponent/home/home.component';
import { NavbarComponent } from './Components/NavbarComponent/navbar/navbar.component';
import { CocComponent } from './Components/COC-Component/coc/coc.component';
import { CrComponent } from './Components/CR-Component/cr/cr.component';
import { FooterComponent } from './Components/FooterComponent/footer/footer.component';
import { FirstImageComponent } from './Components/FirstImage-Component/first-image/first-image.component';
import { GamepresentationComponent } from './Components/GamePresentationComponent/gamepresentation/gamepresentation.component';
import { ItemsComponent } from './Components/Items/items/items.component';
import { LoginComponent } from './Components/LoginComponent/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { CreateAccountComponent } from './Components/CreateAccount/create-account/create-account.component';
import { CartComponent } from './Components/Cart/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CocComponent,
    CrComponent,
    FooterComponent,
    FirstImageComponent,
    GamepresentationComponent,
    ItemsComponent,
    LoginComponent,
    CreateAccountComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
