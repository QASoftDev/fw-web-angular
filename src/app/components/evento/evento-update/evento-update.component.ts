import { Component, Input, OnInit } from '@angular/core';
import { EventoService } from '../evento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from '../evento.model';

@Component({
  selector: 'app-evento-update',
  templateUrl: './evento-update.component.html',
  styleUrls: ['./evento-update.component.css'],
})
export class EventoUpdateComponent implements OnInit {
  evento: Evento = {} as Evento;

  constructor(
    private eventoService: EventoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.eventoService.readById(id as string).subscribe((evento) => {
      this.evento = evento;
    });
  }

  updateEvento(): void {
    this.eventoService.update(this.evento).subscribe(() => {
      this.eventoService.showMessage('Evento atualizado com sucesso!');
      this.router.navigate(['/eventos']);
    });
  }

  cancel(): void {
    this.router.navigate(['/eventos']);
  }
}
