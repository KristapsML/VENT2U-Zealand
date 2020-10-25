import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSettingsInfoModalComponent } from './current-settings-info-modal.component';

describe('CurrentSettingsInfoModalComponent', () => {
  let component: CurrentSettingsInfoModalComponent;
  let fixture: ComponentFixture<CurrentSettingsInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentSettingsInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentSettingsInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
