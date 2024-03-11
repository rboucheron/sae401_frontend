import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenusComponent } from './menus/menus.component';
import { SushiComponent } from './sushi/sushi.component';
import { DetailsComponent } from './details/details.component';
import { BoxcardsComponent } from './boxcards/boxcards.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
 
  { path: 'boisson', component: SushiComponent },
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
