
import { ShoppingcartsService } from '../shoppingcarts.service';
import { LocalService } from '../local.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent  {



    constructor(private ShoppingcartsService:ShoppingcartsService, private  LocalService:LocalService){}
    
  
    public itemsCount () {
      return this.LocalService.getTotalCount(); 
    }
    
}
