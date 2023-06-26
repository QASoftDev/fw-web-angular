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
import { PlaylistService } from '../../playlist/playlist.service';
import { Playlist } from '../../playlist/playlist.model';

@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.css'],
  providers: [],
})
export class EventoCreateComponent implements OnInit {
  playlists: Playlist[] = [];
  selectedValue: string = '';
  evento: Evento = {
    nome: '',
    local: '',
    data: '',
    tipo: '',
    playlist: '',
    confirmado: false,
  };

  constructor(
    private eventoService: EventoService,
    private playlistService: PlaylistService,
    private router: Router,
    private _adapter: DateAdapter<any>
  ) {}

  ngOnInit(
    playlists = this.playlistService
      .read()
      .subscribe((playlists: Playlist[]) => {
        this.playlists = playlists;
      })
  ): void {}

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
