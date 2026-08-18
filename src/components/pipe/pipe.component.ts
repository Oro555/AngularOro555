import { Component } from '@angular/core';
import { ReversePipePipe } from './reverse.pipe.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [ReversePipePipe, CommonModule, FormsModule],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  textoIngresado: string = '';

}
