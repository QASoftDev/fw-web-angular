import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Playlist } from 'src/app/views/playlist-crud/playlist.model';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-playlist-create',
  templateUrl: './playlist-create.component.html',
  styleUrls: ['./playlist-create.component.css'],
})
export class PlaylistCreateComponent implements OnInit {
  playlist: Playlist = {
    nome: '',
  };

  constructor(
    private playlistService: PlaylistService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createPlaylist() {
    this.playlistService.create(this.playlist).subscribe(() => {
      this.playlistService.showMessage('Playlist criada!');
      this.router.navigate(['/playlists']);
    });
  }

  cancel() {
    this.router.navigate(['/playlists']);
  }
}
