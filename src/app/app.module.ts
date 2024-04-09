import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './homecomponents/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MiddleComponent } from './homecomponents/middle/middle.component';
import { CartpageComponent } from './pages/cartpage/cartpage.component';
import { CartcomponentsComponent } from './homecomponents/cartcomponents/cartcomponents.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    MiddleComponent,
    CartpageComponent,
    CartcomponentsComponent
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
