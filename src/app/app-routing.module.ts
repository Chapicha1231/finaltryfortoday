import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TechPageComponent } from './tech-page/tech-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { RegPageComponent } from './reg-page/reg-page.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'tech/:id', component:TechPageComponent},
  {path:'cart-page', component:CartPageComponent},
  {path:'reg-page', component:RegPageComponent},
  {path:'about', component:AboutComponent},

  //localhost:4200/tag/Tech
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
