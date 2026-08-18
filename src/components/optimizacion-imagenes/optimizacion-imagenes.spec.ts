import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizacionImagenes } from './optimizacion-imagenes';

describe('OptimizacionImagenes', () => {
  let component: OptimizacionImagenes;
  let fixture: ComponentFixture<OptimizacionImagenes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptimizacionImagenes],
    }).compileComponents();

    fixture = TestBed.createComponent(OptimizacionImagenes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
