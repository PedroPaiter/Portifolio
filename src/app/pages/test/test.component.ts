import { Component } from '@angular/core';
import { DefaultBtnComponent } from '../../component/default-btn/default-btn.component';
import { TextBoxComponent } from '../../component/text-box/text-box.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { PainelComponent } from '../../component/painel/painel.component';
import { HeaderComponent } from '../../component/header/header.component';
import { GaleriaComponent } from '../../component/galeria/galeria.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [DefaultBtnComponent, TextBoxComponent,HeaderComponent,PainelComponent, FooterComponent, GaleriaComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

images = ['../../../assets/img/meinclui/home.png', '../../../assets/img/meinclui/usuarios.png']

}
