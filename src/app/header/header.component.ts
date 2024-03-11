import { Component, } from '@angular/core';
import { ShoppingcartsService } from '../shoppingcarts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent  {


    constructor(private ShoppingcartsService:ShoppingcartsService ){}
    
    itemsCount(){
      return this.ShoppingcartsService.itemsCount();
    }
}
