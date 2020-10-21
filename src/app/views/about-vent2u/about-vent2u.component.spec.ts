import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutVent2uComponent } from './about-vent2u.component';

describe('AboutVent2uComponent', () => {
  let component: AboutVent2uComponent;
  let fixture: ComponentFixture<AboutVent2uComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutVent2uComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutVent2uComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
