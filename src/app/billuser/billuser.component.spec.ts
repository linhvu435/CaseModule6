import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilluserComponent } from './billuser.component';

describe('BilluserComponent', () => {
  let component: BilluserComponent;
  let fixture: ComponentFixture<BilluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilluserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
