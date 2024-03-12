import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkscardsComponent } from './drinkscards.component';

describe('DrinkscardsComponent', () => {
  let component: DrinkscardsComponent;
  let fixture: ComponentFixture<DrinkscardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrinkscardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrinkscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
