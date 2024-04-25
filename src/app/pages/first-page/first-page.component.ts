import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { PainelComponent } from '../../component/painel/painel.component';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [HeaderComponent, PainelComponent, FooterComponent],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent {

}
