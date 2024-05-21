import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [GalleriaModule, FormsModule ],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  @Input() images: string[] = [];



}
