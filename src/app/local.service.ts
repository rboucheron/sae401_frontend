import { Injectable } from '@angular/core';
import { Box } from '../model/box'
import { Drink } from '../model/drink'

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor() {}

  public GetBox(): any[] {
    const boxsString: string | null = localStorage.getItem('box');
    if (boxsString !== null) {
      return JSON.parse(boxsString);
    } else {
      return [];
    }
  }
  public SetBox(items: any) {
    let boxs: any[] = this.GetBox();
    boxs.push(items);
    localStorage.setItem('box', JSON.stringify(boxs));
  }
  public SetBoxs(items: any) {
    localStorage.setItem('box', JSON.stringify(items));
  }
  public GetDrink(): any[] {
    const drinksString: string | null = localStorage.getItem('drink');
    if (drinksString !== null) {
      return JSON.parse(drinksString);
    } else {
      return [];
    }
    
  }
  public SetDrink(items: any) {
    let drinks: any[] = this.GetDrink();
    drinks.push(items);
    localStorage.setItem('drink', JSON.stringify(drinks));
  }

  public SetDrinks(items: any) {
    localStorage.setItem('drink', JSON.stringify(items));
  }
  public CountBox() {
    let boxs: any[] = this.GetBox();
    let boxcount : number = 0; 
 
    for (let i:number = 0; i < boxs.length; i++){
      boxcount = boxcount + boxs[i].quantity; 
    }
    return boxcount; 
  }
  public CountDrink() {
    let drinks: any[] = this.GetDrink();
    let drinkscount : number =0;

    for(let i:number =0; i<drinks.length; i++){
      drinkscount = drinkscount + drinks[i].quantity;
    }
    return drinkscount;
  }

  public getTotalCount(): number {
    const boxCount: number = this.CountBox();
    const drinkCount: number = this.CountDrink();
    return boxCount + drinkCount;
  }
   
  public clearCartBox (id : number){   
    let monTableau : any = this.GetBox();
 
    monTableau = monTableau.filter((Box : any) => Box.id !== id);
    console.log(monTableau);
    this.SetBoxs(monTableau);
   
  }
  public clearCartDrink(id : number){   
    let monTableau : any = this.GetDrink();
 
    monTableau = monTableau.filter((Drink : any) => Drink.id !== id);
    console.log(monTableau);
    this.SetDrinks(monTableau);
   
  }
}
