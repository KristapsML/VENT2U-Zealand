import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInfoModalComponent } from './login-info-modal.component';

describe('LoginInfoModalComponent', () => {
  let component: LoginInfoModalComponent;
  let fixture: ComponentFixture<LoginInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
