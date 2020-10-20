import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWSubmitComponent } from './input-w-submit.component';

describe('InputWSubmitComponent', () => {
  let component: InputWSubmitComponent;
  let fixture: ComponentFixture<InputWSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
