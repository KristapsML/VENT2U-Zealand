import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupSelectionComponent } from './startup-selection.component';

describe('StartupSelectionComponent', () => {
  let component: StartupSelectionComponent;
  let fixture: ComponentFixture<StartupSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
