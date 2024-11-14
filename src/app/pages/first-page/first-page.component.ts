import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { PainelComponent } from '../../component/painel/painel.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { GaleriaComponent } from '../../component/galeria/galeria.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [HeaderComponent,GaleriaComponent, FooterComponent],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})

export class FirstPageComponent {
  images = ['../../../assets/img/meinclui/home.png', '../../../assets/img/meinclui/cadastro_usuario.png', '../../../assets/img/meinclui/login.png', '../../../assets/img/meinclui/usuarios.png', '../../../assets/img/meinclui/perfil_usuario.png','../../../assets/img/meinclui/pesquisa.png'
  ,'../../../assets/img/meinclui/tela_estabelecimentos.png','../../../assets/img/meinclui/questionario.png','../../../assets/img/meinclui/comentarios.png']

  constructor(private router: Router) {}
  
  redirecionarHome() {
    this.router.navigate(['/home']);
  }

}
