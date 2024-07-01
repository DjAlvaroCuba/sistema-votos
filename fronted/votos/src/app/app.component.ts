import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VotosComponent } from './components/votos/votos.component';
import { FormsModule } from '@angular/forms';
import { FormVotosComponent } from './components/form-votos/form-votos.component';
import { FirmaComponent } from './components/firma/firma.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , VotosComponent , FormsModule, VotosComponent,FormVotosComponent,FirmaComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'votos';
}
