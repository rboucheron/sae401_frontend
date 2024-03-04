import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LucideAngularModule, ShoppingBasket, UserCircle} from 'lucide-angular';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule, 
    LucideAngularModule.pick({ ShoppingBasket, UserCircle})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


