import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupSelectSpotInfoModalComponent } from './startup-select-spot-info-modal.component';

describe('StartupSelectSpotInfoModalComponent', () => {
  let component: StartupSelectSpotInfoModalComponent;
  let fixture: ComponentFixture<StartupSelectSpotInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupSelectSpotInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupSelectSpotInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
