import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { EventCrudComponent } from './views/event-crud/event-crud.component';
import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';
import { EventoUpdateComponent } from './components/evento/evento-update/evento-update.component';
import { EventoDeleteComponent } from './components/evento/evento-delete/evento-delete.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
