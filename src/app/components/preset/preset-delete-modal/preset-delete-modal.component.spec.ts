import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetDeleteModalComponent } from './preset-delete-modal.component';

describe('PresetDeleteModalComponent', () => {
  let component: PresetDeleteModalComponent;
  let fixture: ComponentFixture<PresetDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresetDeleteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresetDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
