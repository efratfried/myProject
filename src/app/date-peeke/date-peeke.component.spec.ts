import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePeekeComponent } from './date-peeke.component';

describe('DatePeekeComponent', () => {
  let component: DatePeekeComponent;
  let fixture: ComponentFixture<DatePeekeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatePeekeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatePeekeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
