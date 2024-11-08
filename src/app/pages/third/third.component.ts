import { Component } from '@angular/core';
import { FooterComponent } from '../../component/footer/footer.component';
import { GaleriaComponent } from '../../component/galeria/galeria.component';
import { PainelComponent } from '../../component/painel/painel.component';
import { HeaderComponent } from '../../component/header/header.component';
@Component({
  selector: 'app-third',
  standalone: true,
  imports: [HeaderComponent, PainelComponent,GaleriaComponent, FooterComponent],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {

}
