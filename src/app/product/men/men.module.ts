import { NgModule }      from '@angular/core';
import { MenComponent }   from './men.component';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common'
import { MenRouter } from './men.router';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  imports: [FormsModule,CommonModule,
 SharedModule,
 MenRouter
    
  ],
  declarations: [
       MenComponent
    ],


})
export class MenModule { }
