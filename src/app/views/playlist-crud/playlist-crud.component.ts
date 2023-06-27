import { Component, OnInit } from '@angular/core';
import { Playlist } from './playlist.model';
import { FormControl, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/templates/header/header.service';

@Component({
  selector: 'app-playlist-crud',
  templateUrl: './playlist-crud.component.html',
  styleUrls: ['./playlist-crud.component.css'],
})
export class PlaylistCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Playlists',
      icon: 'playlist_play',
      routeUrl: '/playlists',
    };
  }

  ngOnInit(): void {}

  navigateToEventsCreate(): void {
    this.router.navigate(['/playlists/create']);
  }
}
