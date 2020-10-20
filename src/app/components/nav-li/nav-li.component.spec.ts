import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLiComponent } from './nav-li.component';

describe('NavLiComponent', () => {
  let component: NavLiComponent;
  let fixture: ComponentFixture<NavLiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavLiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
