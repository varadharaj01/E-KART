import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomenComponent }   from './women.component';

export const routes: Routes = [
    {path:'', component:WomenComponent, pathMatch: 'full'}
  ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class WomenRouter{}