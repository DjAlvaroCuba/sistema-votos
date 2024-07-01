import { Component } from '@angular/core';
import { FirmasInterface } from '../../interfaces/firmas.interface';
import { FirmasService } from '../../services/firmas.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VotosService } from '../../services/votos.service';
import { VotosInterface } from '../../interfaces/votos.interface';
import { FirmasUsuarioInterface } from '../../interfaces/firma_voto';

@Component({
  selector: 'app-firma',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './firma.component.html',
  styleUrl: './firma.component.scss'
})
export class FirmaComponent  {
  FirmObj: FirmasInterface = {
    id:0 , 
    nombre: '',
    apellido:'',
    voto:true,
    voto_relacionado: null 
  };

  VotObj: FirmasUsuarioInterface = {
    id:0 ,
    nombre: '',
  };

  
  votosList: VotosInterface[]=[];
  constructor (private firmasservice: FirmasService , private router: Router ,private votosService: VotosService){

  }
  ngOnInit(): void {
    this.getVotos()
  }
  getVotos(){
    this.votosService.getVotos().subscribe({
      next: (result: VotosInterface[]) => {
        this.votosList = result; 
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }
  onSave() {
    
    this.firmasservice.postFirmas(this.FirmObj).subscribe(
      (response)=>{
        console.log('Firma agregado', response);
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error', error)
      }
    )
  }
}
