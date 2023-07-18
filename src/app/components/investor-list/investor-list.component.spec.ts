import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorListComponent } from './investor-list.component';

describe('InvestorListComponent', () => {
  let component: InvestorListComponent;
  let fixture: ComponentFixture<InvestorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestorListComponent]
    });
    fixture = TestBed.createComponent(InvestorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
