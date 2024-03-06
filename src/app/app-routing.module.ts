import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenusComponent } from './menus/menus.component';
import { SushiComponent } from './sushi/sushi.component';
import { BoxcardsComponent } from './boxcards/boxcards.component';
const routes: Routes = [
 
  { path: 'sushi', component: SushiComponent },
  { path: 'menus', component: BoxcardsComponent },
  { path: '**', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
