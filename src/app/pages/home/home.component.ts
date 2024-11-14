import { Component } from '@angular/core';
import { DefaultBtnComponent } from '../../component/default-btn/default-btn.component';
import { TextBoxComponent } from '../../component/text-box/text-box.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { PainelComponent } from '../../component/painel/painel.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DefaultBtnComponent, TextBoxComponent, PainelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}

  redirecionarLinkedin() {
    window.open("https://www.linkedin.com/in/pedro-henrique-paiter-b27a08267/","_blank")
  }

  redirecionarEmail(){
    window.open("mailto:pedropaiter26@gmail.com","_blank")
  }

  redirecionarContato() {
    window.open("https://linktr.ee/PedroPaiter","_blank")
  }
  
  redirecionarMeinclui() {
    this.router.navigate(['/primeira']);
  }

  redirecionarAgendeja() {
    this.router.navigate(['/segunda']);
  }

  redirecionarPokedex() {
    this.router.navigate(['/terceira']);
  }

  baixarCurriculo(){
    const link = document.createElement('a');
    link.href = 'src/assets/curriculo/Curriculo Pedro Paiter.pdf';
    link.download = 'Curriculo Pedro Paiter.pdf'
    link.click();
  }
}
