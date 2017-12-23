import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicComponent }   from './electronics.component';
export const routes: Routes = [
    {path:'', component:ElectronicComponent, pathMatch: 'full'}
  ];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ElectronicRouter{}