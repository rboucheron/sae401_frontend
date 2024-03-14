import { Component, OnInit, Input, input } from '@angular/core';
import { Drink } from '../../model/drink';

@Component({
  selector: 'app-drinkcard',
  templateUrl: './drinkcard.component.html',
})
export class DrinkcardComponent {
  @Input() Drink!: Drink; 
}
