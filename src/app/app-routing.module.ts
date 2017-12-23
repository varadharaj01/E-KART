import { NgModule }             from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './product-detail/hero-detail.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path: 'dashboard',  component: DashboardComponent},
  {path:'men', loadChildren:'app/product/men/men.module#MenModule'},
  {path:'women', loadChildren:'app/product/women/women.module#WomenModule'},
  {path:'electronic', loadChildren:'app/product/electronics/electronics.module#ElectronicModulde'},
  {path:'list', loadChildren:'app/cart/hero.list.module#listModulde'},
  { path: 'detail/:id', component: HeroDetailComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
  })
export class AppRoutingModule {
   

}