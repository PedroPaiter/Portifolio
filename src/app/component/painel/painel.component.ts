import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})
export class PainelComponent {  
  @Input() root: string = '';
  @Output() onClick = new EventEmitter<void>();

  click() {
    this.onClick.emit();
  }
  
}
