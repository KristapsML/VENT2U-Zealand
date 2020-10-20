import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupTimeSuggestionComponent } from './startup-time-suggestion.component';

describe('StartupTimeSuggestionComponent', () => {
  let component: StartupTimeSuggestionComponent;
  let fixture: ComponentFixture<StartupTimeSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupTimeSuggestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupTimeSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
