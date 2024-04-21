import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-btn',
  standalone: true,
  imports: [],
  templateUrl: './default-btn.component.html',
  styleUrl: './default-btn.component.css'
})
export class DefaultBtnComponent {
  @Input() title: string = '';
  @Output() onClick = new EventEmitter<void>();

  click() {
    this.onClick.emit();
  }
}
