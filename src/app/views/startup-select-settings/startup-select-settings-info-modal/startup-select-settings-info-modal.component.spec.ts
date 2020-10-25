import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupSelectSettingsInfoModalComponent } from './startup-select-settings-info-modal.component';

describe('StartupSelectSettingsInfoModalComponent', () => {
  let component: StartupSelectSettingsInfoModalComponent;
  let fixture: ComponentFixture<StartupSelectSettingsInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupSelectSettingsInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupSelectSettingsInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
