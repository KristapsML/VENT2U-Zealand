import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupOverviewComponent } from './startup-overview.component';

describe('StartupOverviewComponent', () => {
  let component: StartupOverviewComponent;
  let fixture: ComponentFixture<StartupOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
