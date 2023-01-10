import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarleftComponent1 } from './navbarleft-component1.component';

describe('NavbarleftComponent', () => {
  let component: NavbarleftComponent1;
  let fixture: ComponentFixture<NavbarleftComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarleftComponent1 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarleftComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
