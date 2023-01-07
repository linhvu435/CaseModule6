import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarleftbillComponent } from './navbarleftbill.component';

describe('NavbarleftbillComponent', () => {
  let component: NavbarleftbillComponent;
  let fixture: ComponentFixture<NavbarleftbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarleftbillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarleftbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
