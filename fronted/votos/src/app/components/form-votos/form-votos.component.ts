import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VotosInterface } from '../../interfaces/votos.interface';
import { VotosService } from '../../services/votos.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-form-votos',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './form-votos.component.html',
  styleUrl: './form-votos.component.scss'
})
export class FormVotosComponent {
    VotObj: VotosInterface = {
      id:0 ,
      evento: '', 
      nombre: '',
      descripcion:'',
      organizacion:'',
      encargado:'',
      firmas: 0 ,
      fecha_finalizacion: ''
    };
    constructor (private votoservice: VotosService , private router: Router ){

    }
    onSave() {
      this.votoservice.postVotos(this.VotObj).subscribe(
        (response)=>{
          console.log('Voto agregado', response);
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error', error)
        }
      )
    }
}
