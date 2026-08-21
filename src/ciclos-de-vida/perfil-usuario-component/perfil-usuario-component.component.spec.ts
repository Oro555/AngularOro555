import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUsuarioComponentComponent } from './perfil-usuario-component.component';

describe('PerfilUsuarioComponentComponent', () => {
  let component: PerfilUsuarioComponentComponent;
  let fixture: ComponentFixture<PerfilUsuarioComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilUsuarioComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilUsuarioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
