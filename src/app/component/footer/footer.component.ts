import { Component } from '@angular/core';
import { DefaultBtnComponent } from '../default-btn/default-btn.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DefaultBtnComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
