import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupSelectTimeComponent } from './startup-select-time.component';

describe('StartupSelectTimeComponent', () => {
  let component: StartupSelectTimeComponent;
  let fixture: ComponentFixture<StartupSelectTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupSelectTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupSelectTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
