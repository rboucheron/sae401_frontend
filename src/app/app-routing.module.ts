import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenusComponent } from './menus/menus.component';
import { DetailsComponent } from './details/details.component';
import { BoxcardsComponent } from './boxcards/boxcards.component';
import { CartComponent } from './cart/cart.component';
import { DrinkcardComponent } from './drinkcard/drinkcard.component';
const routes: Routes = [
 
  { path: 'boisson', component: DrinkcardComponent },
  { path: 'menus', component: BoxcardsComponent },
  { path: 'details/:id', component: DetailsComponent},
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
