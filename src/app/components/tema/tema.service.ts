import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Tema } from './tema.model';

@Injectable({
  providedIn: 'root',
})
export class TemaService {
  baseUrl = 'http://localhost:3000/temas';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  create(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>(this.baseUrl, tema);
  }

  read(): Observable<Tema[]> {
    return this.http.get<Tema[]>(this.baseUrl);
  }

  readById(id: string): Observable<Tema> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Tema>(url);
  }

  update(tema: Tema): Observable<Tema> {
    const url = `${this.baseUrl}/${tema.id}`;
    return this.http.put<Tema>(url, tema);
  }

  delete(id: number): Observable<Tema> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Tema>(url);
  }
}
