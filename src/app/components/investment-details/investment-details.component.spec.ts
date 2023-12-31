import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentDetailsComponent } from './investment-details.component';

describe('InvestmentDetailsComponent', () => {
  let component: InvestmentDetailsComponent;
  let fixture: ComponentFixture<InvestmentDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestmentDetailsComponent]
    });
    fixture = TestBed.createComponent(InvestmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
