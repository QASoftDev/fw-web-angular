import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Playlist } from '../playlist.model';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-playlist-delete',
  templateUrl: './playlist-delete.component.html',
  styleUrls: ['./playlist-delete.component.css'],
})
export class PlaylistDeleteComponent implements OnInit {
  playlist: Playlist = {} as Playlist;

  constructor(
    private playlistService: PlaylistService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.playlistService.readById(id as string).subscribe((playlist) => {
      this.playlist = playlist;
    });
  }

  deleteplaylist(): void {
    this.playlistService.delete(this.playlist.id as string).subscribe(() => {
      this.playlistService.showMessage('Playlist excluída com sucesso!');
      this.router.navigate(['/playlists']);
    });
  }

  cancel(): void {
    this.router.navigate(['/playlists']);
  }
}
