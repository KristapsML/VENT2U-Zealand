import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetsInfoModalComponent } from './presets-info-modal.component';

describe('PresetsInfoModalComponent', () => {
  let component: PresetsInfoModalComponent;
  let fixture: ComponentFixture<PresetsInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresetsInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresetsInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
