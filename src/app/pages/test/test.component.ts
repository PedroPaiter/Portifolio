import { Component } from '@angular/core';
import { DefaultBtnComponent } from '../../component/default-btn/default-btn.component';
import { TextBoxComponent } from '../../component/text-box/text-box.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { PainelComponent } from '../../component/painel/painel.component';
import { HeaderComponent } from '../../component/header/header.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [DefaultBtnComponent, TextBoxComponent,HeaderComponent,PainelComponent, FooterComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

}
