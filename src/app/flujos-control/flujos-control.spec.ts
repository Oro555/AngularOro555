import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlujosControl } from './flujos-control';

describe('FlujosControl', () => {
  let component: FlujosControl;
  let fixture: ComponentFixture<FlujosControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlujosControl],
    }).compileComponents();

    fixture = TestBed.createComponent(FlujosControl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
