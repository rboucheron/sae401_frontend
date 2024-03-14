import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoxService } from '../box.service';
import { LocalService } from '../local.service';
import { Box } from '../../model/box';
import { ShoppingcartsService } from '../shoppingcarts.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  private id!: number;
  public box!: Box;
  public aliments!: any;
  public savor!: any;
  private incarte: boolean = false;

  constructor(
    private activated: ActivatedRoute,
    private boxService: BoxService,
    private LocalService: LocalService,
    private ShoppingcartsService: ShoppingcartsService
  ) {}
  ngOnInit() {
    this.activated.params.subscribe((data) => {
      this.id = data['id'];
    });
    this.recoverBox();
  }

  private recoverBox() {
    this.boxService.getBox(this.id).subscribe(
      (data: any) => {
        this.box = data[0];
        this.aliments = data[1];
        this.savor = data[2];
      },
      (error: any) => {
        console.error('Error fetching api:', error);
      }
    );
  }

  public addBoxtoCard() {
    const boxs: any = this.LocalService.GetBox();
    console.log(boxs);
    const id : number = this.box.id; 
    let index : number = boxs.findIndex(function(element : Box) {
      return element.id == id;
    });
    if (index == -1) {
      this.box.quantity = 1; 
      this.LocalService.SetBox(this.box);
    }else{
      boxs[index].quantity ++; 
      boxs[index].price = boxs[index].price*2; 
      this.LocalService.SetBoxs(boxs); 

    }
  }
}
