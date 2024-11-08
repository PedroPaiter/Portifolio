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


  redirecionarLinkedin() {
    window.open("https://www.linkedin.com/in/pedro-henrique-paiter-b27a08267/","_blank")
  }

  redirecionarEmail(){
    window.open("mailto:pedropaiter26@gmail.com","_blank")
  }

  redirecionarGithub() {
    window.open("https://github.com/PedroPaiter","_blank")
  }
}
