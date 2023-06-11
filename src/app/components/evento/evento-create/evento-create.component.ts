import { Component, OnInit } from '@angular/core';
import { EventoService } from '../evento.service';
import { Router } from '@angular/router';
import { Evento } from '../evento.model';

@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.css'],
})
export class EventoCreateComponent implements OnInit {
  evento: Evento = {
    nome: '',
    local: '',
    data: '',
    tipo: '',
    confirmado: false,
  };

  constructor(private eventoService: EventoService, private router: Router) {}

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
