import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitydetailsComponent } from './citydetails.component';

describe('CitydetailsComponent', () => {
  let component: CitydetailsComponent;
  let fixture: ComponentFixture<CitydetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitydetailsComponent]
    });
    fixture = TestBed.createComponent(CitydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});