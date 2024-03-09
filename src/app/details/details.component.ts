import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoxService } from '../box.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',

})
export class DetailsComponent implements OnInit{
  private id !: number; 
  public box !: any; 
  public aliments !: any; 
  constructor( private activated: ActivatedRoute, private boxService: BoxService) {}
  ngOnInit() {
    this.activated.params.subscribe(
      (data) => {
        this.id = data['id']; 
      }
    );
    this.recoverBox();
  }
  private recoverBox() {

    this.boxService.getBox(this.id).subscribe(
      (data: any) => {
        this.box = data[0]; 
        this.aliments = data[1]; 
        console.log( this.aliments ); 
      },
      (error: any) => {
        console.error('Error fetching api:', error);
      }
    );

  } 


}
