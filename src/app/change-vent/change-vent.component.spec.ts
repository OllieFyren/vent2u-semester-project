import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeVentComponent } from './change-vent.component';

describe('ChangeVentComponent', () => {
  let component: ChangeVentComponent;
  let fixture: ComponentFixture<ChangeVentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeVentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeVentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
