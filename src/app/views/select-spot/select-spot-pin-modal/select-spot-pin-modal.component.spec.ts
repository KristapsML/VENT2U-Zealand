import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSpotPinModalComponent } from './select-spot-pin-modal.component';

describe('SelectSpotPinModalComponent', () => {
  let component: SelectSpotPinModalComponent;
  let fixture: ComponentFixture<SelectSpotPinModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSpotPinModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSpotPinModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
