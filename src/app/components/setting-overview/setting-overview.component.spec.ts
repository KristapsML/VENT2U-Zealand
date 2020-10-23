import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingOverviewComponent } from './setting-overview.component';

describe('SettingOverviewComponent', () => {
  let component: SettingOverviewComponent;
  let fixture: ComponentFixture<SettingOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
