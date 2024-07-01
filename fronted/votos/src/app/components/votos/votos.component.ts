import { Component, OnInit } from '@angular/core';
import { VotosInterface } from '../../interfaces/votos.interface';
import { VotosService } from '../../services/votos.service';

@Component({
  selector: 'app-votos',
  standalone: true,
  imports: [],
  templateUrl: './votos.component.html',
  styleUrl: './votos.component.scss'
})
export class VotosComponent implements OnInit {
  
  votosList: VotosInterface[]=[];

  constructor(private votosService: VotosService){}
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
    
  }

