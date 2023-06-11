import { Component, Input, OnInit } from '@angular/core';
import { Evento } from '../evento.model';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-evento-read',
  templateUrl: './evento-read.component.html',
  styleUrls: ['./evento-read.component.css'],
})
export class EventoReadComponent implements OnInit {
  @Input() infoEventoRead: string = {} as string;

  eventos: Evento[] = [];
  displayedColumns = [
    'id',
    'nome',
    'local',
    'data',
    'tipo',
    'confirmado',
    'acoes',
  ];

  constructor(private eventoService: EventoService) {}

  ngOnInit(): void {
    this.eventoService.read().subscribe((eventos: Evento[]) => {
      this.eventos = eventos;
    });
  }
}
