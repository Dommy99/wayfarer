import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCitiesComponent } from './all-cities.component';

describe('AllCitiesComponent', () => {
  let component: AllCitiesComponent;
  let fixture: ComponentFixture<AllCitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCitiesComponent]
    });
    fixture = TestBed.createComponent(AllCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
