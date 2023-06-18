import { Component, Inject, OnInit } from '@angular/core';
import { EventoService } from '../evento.service';
import { Router } from '@angular/router';
import { Evento } from '../evento.model';

import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';

@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.css'],
  providers: [],
})
export class EventoCreateComponent implements OnInit {
  evento: Evento = {
    nome: '',
    local: '',
    data: '',
    tipo: '',
    confirmado: false,
  };

  constructor(
    private eventoService: EventoService,
    private router: Router,
    private _adapter: DateAdapter<any>
  ) {}

  ngOnInit(): void {}

  createEvento(): void {
    this.eventoService.create(this.evento).subscribe(() => {
      this.eventoService.showMessage('Evento criado com sucesso!');
      this.router.navigate(['/eventos']);
    });
  }

  cancel(): void {
    this.router.navigate(['/eventos']);
  }
}
