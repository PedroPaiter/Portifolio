import { Component } from '@angular/core';
import { DefaultBtnComponent } from '../../component/default-btn/default-btn.component';
import { TextBoxComponent } from '../../component/text-box/text-box.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { PainelComponent } from '../../component/painel/painel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DefaultBtnComponent, TextBoxComponent, FooterComponent, PainelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
