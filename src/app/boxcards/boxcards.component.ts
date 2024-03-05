import { Component } from '@angular/core';
import { BoxService } from '../box.service';
@Component({
  selector: 'app-boxcards',
  templateUrl: './boxcards.component.html',
})
export class BoxcardsComponent {

  boxs!: any;
  constructor(private BoxService: BoxService) {}
  setBoxs() {
    this.BoxService.getBoxs().subscribe(
      (data: any) => {
        this.boxs = data;
      },
      (error: any) => {
        console.error('Error fetching IP address:', error);
      }
    );
  }
}
