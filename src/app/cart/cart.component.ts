import { Component } from '@angular/core';
import { LocalService } from '../local.service';
import { OnInit } from '@angular/core';
import { Box } from '../../model/box';
import { Drink } from '../../model/drink';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  public item!: any;
  constructor(private LocalService: LocalService) {}

  ngOnInit() {
    this.findAllItems();
  }

  private findAllItems(): void {
    const boxs: any[] = this.LocalService.GetBox();
    const drinks: any[] = this.LocalService.GetDrink();
    this.item = [...boxs, ...drinks];
  }
  
  public addItemsToCard(id: number): void {
    this.addBoxOrDrinkToCard(id, 'box');
    this.addBoxOrDrinkToCard(id, 'drink');
  }
  
  private addBoxOrDrinkToCard(id: number, itemType: string): void {
    if (itemType === 'box') {
      const boxs: any[] = this.LocalService.GetBox();
      const index: number = boxs.findIndex((element: Box) => element.id === id);
      if (index !== -1) {
        boxs[index].quantity++;
        boxs[index].price += boxs[index].startprice;
        this.LocalService.SetBoxs(boxs);
      }
    } else if (itemType === 'drink') {
      const drinks: any[] = this.LocalService.GetDrink();
      const index: number = drinks.findIndex((element: Drink) => element.id === id);
      if (index !== -1) {
        drinks[index].quantity++;
        drinks[index].price += drinks[index].startprice;
        this.LocalService.SetDrinks(drinks);
      }
      this.findAllItems();
    }

  }
  

  

  public removeItemFromCard(id: number): void {
    this.removeBoxOrDrinkFromCard(id, 'box');
    this.removeBoxOrDrinkFromCard(id, 'drink');
  }
  
  private removeBoxOrDrinkFromCard(id: number, itemType: string): void {
    if (itemType === 'box') {
      const boxs: any = this.LocalService.GetBox();
      const index: number = boxs.findIndex((element: Box) => element.id === id);
      if (index !== -1 && boxs[index].quantity > 0) {
        boxs[index].quantity--;
        boxs[index].price -= boxs[index].startprice;
        this.LocalService.SetBoxs(boxs);
      }
    } else if (itemType === 'drink') {
      const drinks: any = this.LocalService.GetDrink();
      const index: number = drinks.findIndex((element: Drink) => element.id === id);
      if (index !== -1 && drinks[index].quantity > 0) {
        drinks[index].quantity--;
        drinks[index].price -= drinks[index].startprice;
        this.LocalService.SetDrinks(drinks);
      }
    }
    this.findAllItems();
  }

  public totalCart(): number {
    let total = 0;
    this.item.forEach((item: Box | Drink) => {
      total += +item.quantity * +item.startprice;
    });
    
    return total;
  }
  
  
}
