import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Playlist } from '../playlist.model';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-playlist-update',
  templateUrl: './playlist-update.component.html',
  styleUrls: ['./playlist-update.component.css'],
})
export class PlaylistUpdateComponent implements OnInit {
  playlist: Playlist = {} as Playlist;

  constructor(
    private playlistService: PlaylistService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.playlistService
      .readById(id as string)
      .subscribe((playlist: Playlist) => {
        this.playlist = playlist;
      });
  }

  updatePlaylist() {
    console.log('Chamou updatePlaylist');
    this.playlistService.update(this.playlist).subscribe(() => {
      this.playlistService.showMessage('Playlist atualizada com sucesso!');
      this.router.navigate(['/playlists']);
    });
  }

  cancel(): void {
    this.router.navigate(['/playlists']);
  }
}
