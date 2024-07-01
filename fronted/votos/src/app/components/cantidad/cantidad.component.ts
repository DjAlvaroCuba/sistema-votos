import { Component } from '@angular/core';
import { VotosInterface } from '../../interfaces/votos.interface';
import { VotosService } from '../../services/votos.service';
import { ConteoVotos } from '../../interfaces/conteo';
import { ConteoService } from '../../services/conteo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cantidad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cantidad.component.html',
  styleUrl: './cantidad.component.scss'
})
export class CantidadComponent {
  
  votosList: VotosInterface[]=[];
  conteoList: ConteoVotos[]=[];
  conteo: ConteoVotos = { votos_favor: 0, votos_contra: 0 };
  
  
  
  constructor(private votosService: VotosService , private eventoService: ConteoService){}

  ngOnInit(): void {
    this.getVotos();
    this.getConteoVotos();
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
  getConteoVotos(): void {
    this.votosList.forEach((voto) => {
      this.eventoService.getConteoVotos(voto.id).subscribe({
        next: (conteo: ConteoVotos) => {
          this.conteoList.push(conteo); // Agrega el conteo obtenido a la lista de conteos
          console.log('Conteo de votos para evento', voto.id, ':', conteo);
        },
        error: (err) => {
          console.error(`Error al obtener conteo de votos para el evento ${voto.id}:`, err);
        }
      });
    });
  }
}
  
  

