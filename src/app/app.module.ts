import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import {HeaderComponent } from './header/header.component';
import {FooterComponent } from './header/footer.component';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './product-detail/hero-detail.component';
import { SharedModule } from './shared/shared.module';
import {CategoryPipe,CategoryPipe2} from './hero.serach.service';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService,{
    passThruUnknownUrl: true }),
    AppRoutingModule,
    SharedModule 
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    CategoryPipe,
    CategoryPipe2
   
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
