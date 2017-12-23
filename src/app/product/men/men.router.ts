import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenComponent }   from './men.component';

export const routes: Routes = [
    {path:'', component:MenComponent, pathMatch: 'full'}
  ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MenRouter{}