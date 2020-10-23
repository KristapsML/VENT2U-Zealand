import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWSubmitButtonComponent } from './input-w-submit-button.component';

describe('InputWSubmitButtonComponent', () => {
  let component: InputWSubmitButtonComponent;
  let fixture: ComponentFixture<InputWSubmitButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWSubmitButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWSubmitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
