import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveBeneficiaryComponent } from './remove-beneficiary.component';

describe('RemoveBeneficiaryComponent', () => {
  let component: RemoveBeneficiaryComponent;
  let fixture: ComponentFixture<RemoveBeneficiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveBeneficiaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveBeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
