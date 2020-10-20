import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupSelectSettingsComponent } from './startup-select-settings.component';

describe('StartupSelectSettingsComponent', () => {
  let component: StartupSelectSettingsComponent;
  let fixture: ComponentFixture<StartupSelectSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupSelectSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupSelectSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
