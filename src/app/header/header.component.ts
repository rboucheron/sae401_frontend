import { Component, } from '@angular/core';
import { ShoppingcartsService } from '../shoppingcarts.service';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent  {


    constructor(private ShoppingcartsService:ShoppingcartsService, private  LocalService:LocalService){}
    
    itemsCount(){
      return this.LocalService.CountBox(); 
    }
}
