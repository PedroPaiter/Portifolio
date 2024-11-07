import { Component } from '@angular/core';
import { FooterComponent } from '../../component/footer/footer.component';
import { GaleriaComponent } from '../../component/galeria/galeria.component';
import { PainelComponent } from '../../component/painel/painel.component';
import { HeaderComponent } from '../../component/header/header.component';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [HeaderComponent, PainelComponent,GaleriaComponent, FooterComponent],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css'
})
export class SecondPageComponent {
  images = ['../../../assets/img/agendeja/Home.png','../../../assets/img/agendeja/Agenda.png', '../../../assets/img/agendeja/horarios.png', '../../../assets/img/agendeja/Servicos.png','../../../assets/img/agendeja/pre-pagamento.png', '../../../assets/img/agendeja/Pos-pagamento.png','../../../assets/img/agendeja/Agendamento.png']
}
