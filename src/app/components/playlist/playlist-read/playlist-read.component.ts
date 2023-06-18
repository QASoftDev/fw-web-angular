import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/views/playlist-crud/playlist.model';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-playlist-read',
  templateUrl: './playlist-read.component.html',
  styleUrls: ['./playlist-read.component.css'],
})
export class PlaylistReadComponent implements OnInit {
  playlists: Playlist[] = [];

  displayedColumns = ['id', 'nome', 'acoes'];

  constructor(private playlistService: PlaylistService) {}

  ngOnInit(): void {
    this.playlistService.read().subscribe((playlists: Playlist[]) => {
      this.playlists = playlists;
    });
  }
}
