import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupOverviewInfoModalComponent } from './startup-overview-info-modal.component';

describe('StartupOverviewInfoModalComponent', () => {
  let component: StartupOverviewInfoModalComponent;
  let fixture: ComponentFixture<StartupOverviewInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupOverviewInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupOverviewInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
