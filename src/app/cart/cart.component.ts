import { Component } from '@angular/core';
import { ShoppingcartsService } from '../shoppingcarts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

    item = this.ShoppingcartsService.getItems();
    constructor(private ShoppingcartsService: ShoppingcartsService){}
}
