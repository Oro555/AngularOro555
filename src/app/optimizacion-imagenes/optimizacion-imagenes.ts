import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-optimizacion-imagenes',
  imports: [NgOptimizedImage],
  templateUrl: './optimizacion-imagenes.html',
  styleUrl: './optimizacion-imagenes.css',
})
export class OptimizacionImagenes {
  logoUrl = 'https://cdn-icons-png.flaticon.com/128/1650/1650609.png';
  logoAlt = 'Logo d un perro';
  username = 'marcodev';
}
