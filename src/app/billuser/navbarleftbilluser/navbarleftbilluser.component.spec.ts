import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarleftbilluserComponent } from './navbarleftbilluser.component';

describe('NavbarleftbilluserComponent', () => {
  let component: NavbarleftbilluserComponent;
  let fixture: ComponentFixture<NavbarleftbilluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarleftbilluserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarleftbilluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
