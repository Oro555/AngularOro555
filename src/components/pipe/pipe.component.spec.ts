import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { PipeComponent } from './pipe.component';

describe('PipeComponent', () => {
  let component: PipeComponent;
  let fixture: ComponentFixture<PipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should alert when the currency value is invalid', () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => undefined);

    component.textoPipeMonedas = null;
    component.validarMoneda();

    expect(alertSpy).toHaveBeenCalledWith('Ingrese un valor numérico válido.');
    alertSpy.mockRestore();
  });

  it('should not alert when the currency value is valid', () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => undefined);

    component.textoPipeMonedas = 100;
    component.validarMoneda();

    expect(alertSpy).not.toHaveBeenCalled();
    alertSpy.mockRestore();
  });
});
