import { Component } from '@angular/core';
import { ShoppingcartsService } from '../shoppingcarts.service';
import { LocalService } from '../local.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  public item!: any;
  constructor(private LocalService: LocalService) {}

  ngOnInit() {
    this.item = this.LocalService.GetBox();

  }
}
