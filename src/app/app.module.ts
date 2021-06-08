import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { sanitizeIdentifier } from '@angular/compiler';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BikesComponent } from './bikes/bikes.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TelevisionsComponent } from './televisions/televisions.component';


import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductsComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ContactusComponent,
    BikesComponent,
    MobilesComponent,
    PagenotfoundComponent,
    TelevisionsComponent,
    UsersComponent,
    UserdetailsComponent,
    TvshowsComponent,
    ShowdetailsComponent,
   
    
   
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 