import { Component, Input } from '@angular/core';
import { DefaultBtnComponent } from '../default-btn/default-btn.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DefaultBtnComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() name: string = '';
  @Input() content: string = '';

}
