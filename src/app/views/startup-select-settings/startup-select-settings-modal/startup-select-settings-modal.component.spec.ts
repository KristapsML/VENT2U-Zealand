import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupSelectSettingsModalComponent } from './startup-select-settings-modal.component';

describe('StartupSelectSettingsModalComponent', () => {
  let component: StartupSelectSettingsModalComponent;
  let fixture: ComponentFixture<StartupSelectSettingsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupSelectSettingsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupSelectSettingsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
