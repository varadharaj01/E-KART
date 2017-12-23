import { NgModule }      from '@angular/core';
import { HeroesListComponent }   from './hero-list.component';
import { HeroListRouter } from './hero.list.router';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [FormsModule,CommonModule,
 SharedModule,
 HeroListRouter
    
  ],
  declarations: [
       HeroesListComponent
    ],


})
export class listModulde { }
