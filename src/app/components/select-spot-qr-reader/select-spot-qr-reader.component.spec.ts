import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSpotQrReaderComponent } from './select-spot-qr-reader.component';

describe('SelectSpotQrReaderComponent', () => {
  let component: SelectSpotQrReaderComponent;
  let fixture: ComponentFixture<SelectSpotQrReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSpotQrReaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSpotQrReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
