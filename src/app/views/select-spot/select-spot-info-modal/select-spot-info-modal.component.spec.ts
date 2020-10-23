import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSpotInfoModalComponent } from './select-spot-info-modal.component';

describe('SelectSpotInfoModalComponent', () => {
  let component: SelectSpotInfoModalComponent;
  let fixture: ComponentFixture<SelectSpotInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSpotInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSpotInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
