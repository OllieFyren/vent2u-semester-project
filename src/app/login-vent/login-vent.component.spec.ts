import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVentComponent } from './login-vent.component';

describe('LoginVentComponent', () => {
  let component: LoginVentComponent;
  let fixture: ComponentFixture<LoginVentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginVentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginVentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
