import { Component, OnInit } from '@angular/core';
import { Evento } from '../evento.model';
import { EventoService } from '../evento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-evento-delete',
  templateUrl: './evento-delete.component.html',
  styleUrls: ['./evento-delete.component.css'],
})
export class EventoDeleteComponent implements OnInit {
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

  deleteEvento(): void {
    this.eventoService.delete(this.evento.id as number).subscribe(() => {
      this.eventoService.showMessage('Evento excluído com sucesso!');
      this.router.navigate(['/eventos']);
    });
  }

  cancel(): void {
    this.router.navigate(['/eventos']);
  }
}
