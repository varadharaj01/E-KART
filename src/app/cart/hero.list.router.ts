
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent }   from './hero-list.component';
export const routes: Routes = [
    {path:'', component:HeroesListComponent, pathMatch: 'full'}
  ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HeroListRouter{}