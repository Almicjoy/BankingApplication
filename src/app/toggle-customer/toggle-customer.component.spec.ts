import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleCustomerComponent } from './toggle-customer.component';

describe('ToggleCustomerComponent', () => {
  let component: ToggleCustomerComponent;
  let fixture: ComponentFixture<ToggleCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
