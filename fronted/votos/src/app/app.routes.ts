import { Routes } from '@angular/router';

import { FormVotosComponent } from './components/form-votos/form-votos.component';
import { VotosComponent } from './components/votos/votos.component';
import { FirmaComponent } from './components/firma/firma.component';
import { CantidadComponent } from './components/cantidad/cantidad.component';

export const routes: Routes = [

    {path: 'nuevo-voto', component:FormVotosComponent},
    {path: '', component:VotosComponent}, 
    {path: 'firma', component:FirmaComponent}, 
    {path: 'votos', component:CantidadComponent}, 

];
