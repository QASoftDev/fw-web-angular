import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Playlist } from '../../playlist/playlist.model';
import { PlaylistService } from '../../playlist/playlist.service';
import { Evento } from '../evento.model';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-evento-update',
  templateUrl: './evento-update.component.html',
  styleUrls: ['./evento-update.component.css'],
})
export class EventoUpdateComponent implements OnInit {
  evento: Evento = {} as Evento;
  selectedValue: string = '';
  playlists: Playlist[] = [];

  constructor(
    private eventoService: EventoService,
    private playlistService: PlaylistService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const playlists = this.playlistService
      .read()
      .subscribe((playlists: Playlist[]) => {
        this.playlists = playlists;
      });
    const id = this.route.snapshot.paramMap.get('id');
    this.eventoService.readById(id as string).subscribe((evento) => {
      this.evento = evento;
    });
  }

  updateEvento(): void {
    console.log(this.evento);
    this.eventoService.update(this.evento).subscribe(() => {
      this.eventoService.showMessage('Evento atualizado com sucesso!');
      this.router.navigate(['/eventos']);
    });
  }

  cancel(): void {
    this.router.navigate(['/eventos']);
  }
}
