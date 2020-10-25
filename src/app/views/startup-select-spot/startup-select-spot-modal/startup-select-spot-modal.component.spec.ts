import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupSelectSpotModalComponent } from './startup-select-spot-modal.component';

describe('StartupSelectSpotModalComponent', () => {
  let component: StartupSelectSpotModalComponent;
  let fixture: ComponentFixture<StartupSelectSpotModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupSelectSpotModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupSelectSpotModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
