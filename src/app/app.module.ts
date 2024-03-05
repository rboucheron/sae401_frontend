import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LucideAngularModule, ShoppingBasket, UserCircle} from 'lucide-angular';
import { HomeComponent } from './home/home.component';
import { MenusComponent } from './menus/menus.component';
import { SushiComponent } from './sushi/sushi.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MenusComponent,
    SushiComponent,
    CardComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    LucideAngularModule.pick({ ShoppingBasket, UserCircle})
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


