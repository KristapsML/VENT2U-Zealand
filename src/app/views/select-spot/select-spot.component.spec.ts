import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSpotComponent } from './select-spot.component';

describe('SelectSpotComponent', () => {
  let component: SelectSpotComponent;
  let fixture: ComponentFixture<SelectSpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSpotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
