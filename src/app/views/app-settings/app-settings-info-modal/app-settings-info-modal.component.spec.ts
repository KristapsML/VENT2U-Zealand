import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSettingsInfoModalComponent } from './app-settings-info-modal.component';

describe('AppSettingsInfoModalComponent', () => {
  let component: AppSettingsInfoModalComponent;
  let fixture: ComponentFixture<AppSettingsInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSettingsInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSettingsInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
