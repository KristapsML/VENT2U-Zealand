import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSpotQrModalComponent } from './select-spot-qr-modal.component';

describe('SelectSpotQrModalComponent', () => {
  let component: SelectSpotQrModalComponent;
  let fixture: ComponentFixture<SelectSpotQrModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSpotQrModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSpotQrModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
