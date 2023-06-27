import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/components/evento/evento.model';
import { EventoService } from 'src/app/components/evento/evento.service';
import { HeaderService } from 'src/app/templates/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  eventos: Evento[] = [];
  constructor(
    private headerService: HeaderService,
    private eventoService: EventoService
  ) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: '',
    };
  }

  ngOnInit(
    eventos = this.eventoService.read().subscribe((eventos: Evento[]) => {
      this.eventos = eventos;
    })
  ): void {}
}
