import { Component } from '@angular/core';
import { LocalService } from '../local.service';
import { OnInit } from '@angular/core';
import { Box } from '../../model/box';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  public item!: any;
  constructor(private LocalService: LocalService) {}

  ngOnInit() {
    this.findItem();
  }

  private findItem():void {
    this.item = this.LocalService.GetBox();
  }

  public addBoxtoCard(id : number) {
    const boxs: any = this.LocalService.GetBox();
    let index : number = boxs.findIndex(function(element : Box) {
      return element.id == id;
    });
      boxs[index].quantity ++; 
      boxs[index].price = boxs[index].price +  boxs[index].startprice  ; 
      this.LocalService.SetBoxs(boxs); 
      this.findItem();
  }

  public removeBoxtoCard(id : number) {
    const boxs: any = this.LocalService.GetBox();
    let index : number = boxs.findIndex(function(element : Box) {
      return element.id == id;
    });
      boxs[index].quantity --; 
      boxs[index].price = boxs[index].price - boxs[index].startprice ; 
      this.LocalService.SetBoxs(boxs);
      this.findItem();
  }
}
