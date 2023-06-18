import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tema } from 'src/app/components/tema/tema.model';

import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';
import { EventoDeleteComponent } from './components/evento/evento-delete/evento-delete.component';
import { EventoUpdateComponent } from './components/evento/evento-update/evento-update.component';
import { PlaylistCreateComponent } from './components/playlist/playlist-create/playlist-create.component';
import { PlaylistDeleteComponent } from './components/playlist/playlist-delete/playlist-delete.component';
import { PlaylistUpdateComponent } from './components/playlist/playlist-update/playlist-update.component';
import { TemaCreateComponent } from './components/tema/tema-create/tema-create.component';
import { EventCrudComponent } from './views/event-crud/event-crud.component';
import { HomeComponent } from './views/home/home.component';
import { PlaylistCrudComponent } from './views/playlist-crud/playlist-crud.component';
import { ThemeCrudComponent } from './views/theme-crud/theme-crud.component';
import { TemaUpdateComponent } from './components/tema/tema-update/tema-update.component';
import { TemaDeleteComponent } from './components/tema/tema-delete/tema-delete.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'eventos',
    component: EventCrudComponent,
  },
  {
    path: 'eventos/create',
    component: EventoCreateComponent,
  },
  {
    path: 'eventos/update/:id',
    component: EventoUpdateComponent,
  },
  {
    path: 'eventos/delete/:id',
    component: EventoDeleteComponent,
  },
  {
    path: 'temas',
    component: ThemeCrudComponent,
  },
  {
    path: 'temas/create',
    component: TemaCreateComponent,
  },
  {
    path: 'temas/update/:id',
    component: TemaUpdateComponent,
  },
  {
    path: 'temas/delete/:id',
    component: TemaDeleteComponent,
  },
  {
    path: 'playlists',
    component: PlaylistCrudComponent,
  },
  {
    path: 'playlists/create',
    component: PlaylistCreateComponent,
  },
  {
    path: 'playlists/update/:id',
    component: PlaylistUpdateComponent,
  },
  {
    path: 'playlists/delete/:id',
    component: PlaylistDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
