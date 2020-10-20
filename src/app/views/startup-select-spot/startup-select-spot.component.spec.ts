import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupSelectSpotComponent } from './startup-select-spot.component';

describe('StartupSelectSpotComponent', () => {
  let component: StartupSelectSpotComponent;
  let fixture: ComponentFixture<StartupSelectSpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupSelectSpotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupSelectSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
