import { NgModule }      from '@angular/core';
import { WomenComponent }   from './women.component';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common'
import { WomenRouter } from './women.router';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  imports: [FormsModule,CommonModule,
 SharedModule,
 WomenRouter
    
  ],
  declarations: [
       WomenComponent
    ],


})
export class WomenModule { }
