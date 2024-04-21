import { Component } from '@angular/core';
import { DefaultBtnComponent } from '../../component/default-btn/default-btn.component';
import { TextBoxComponent } from '../../component/text-box/text-box.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [DefaultBtnComponent, TextBoxComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

}
