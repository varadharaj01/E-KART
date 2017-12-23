import { NgModule }      from '@angular/core';
import { ElectronicComponent }   from './electronics.component';
import { ElectronicRouter } from './electronics.router';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [FormsModule,CommonModule,
 SharedModule,ElectronicRouter  ],
  declarations: [
       ElectronicComponent
    ],
})
export class ElectronicModulde { }
