import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Playlist } from 'src/app/views/playlist-crud/playlist.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  baseUrl = 'http://localhost:3000/playlists';

  playlists: Playlist[] = [];

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  create(playlist: Playlist): Observable<Playlist> {
    playlist.id = uuidv4();
    this.playlists.push(playlist);
    localStorage.setItem('playlistsBD', JSON.stringify(this.playlists));

    return of(playlist);
  }

  read(): Observable<Playlist[]> {
    if (localStorage.getItem('playlistsBD')) {
      this.playlists = JSON.parse(localStorage.getItem('playlistsBD') || '{}');
    } else {
      this.playlists = [];
    }

    return of(this.playlists);
  }

  readById(id: string): Observable<Playlist> {
    let playlist: Playlist;

    if (localStorage.getItem('playlistsBD')) {
      this.playlists = JSON.parse(localStorage.getItem('playlistsBD') || '{}');
    } else {
      this.playlists = [];
    }

    const index = this.playlists.findIndex((p) => p.id == id);

    playlist = this.playlists[index];
    return of(playlist);
  }

  update(playlist: Playlist): Observable<Playlist> {
    if (localStorage.getItem('playlistsBD')) {
      this.playlists = JSON.parse(localStorage.getItem('playlistsBD') || '{}');
    } else {
      this.playlists = [];
    }

    const index = this.playlists.findIndex((p) => p.id == playlist.id);

    this.playlists.splice(index, 1);

    this.playlists.push(playlist);

    localStorage.setItem('playlistsBD', JSON.stringify(this.playlists));

    return of(playlist);
  }

  delete(id: string): Observable<Playlist> {
    if (localStorage.getItem('playlistsBD')) {
      this.playlists = JSON.parse(localStorage.getItem('playlistsBD') || '{}');
    } else {
      this.playlists = [];
    }

    const index = this.playlists.findIndex((p) => p.id == id);

    let playlist = this.playlists[index];
    this.playlists.splice(index, 1);

    localStorage.setItem('playlistsBD', JSON.stringify(this.playlists));

    return of(playlist);
  }

  // create(playlist: Playlist): Observable<Playlist> {
  //   return this.http.post<Playlist>(this.baseUrl, playlist);
  // }

  // read(): Observable<Playlist[]> {
  //   return this.http.get<Playlist[]>(this.baseUrl);
  // }
  // readById(id: string): Observable<Playlist> {
  //   const url = `${this.baseUrl}/${id}`;
  //   return this.http.get<Playlist>(url);
  // }

  // update(playlist: Playlist): Observable<Playlist> {
  //   const url = `${this.baseUrl}/${playlist.id}`;
  //   return this.http.put<Playlist>(url, playlist);
  // }

  // delete(id: number): Observable<Playlist> {
  //   const url = `${this.baseUrl}/${id}`;
  //   return this.http.delete<Playlist>(url);
  // }
}
