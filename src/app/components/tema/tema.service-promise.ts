import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, lastValueFrom } from 'rxjs';
import { Tema } from './tema.model';

@Injectable({
  providedIn: 'root',
})
export class TemaService {
  baseUrl = 'http://localhost:3000/temas';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  async create(tema: Tema): Promise<Tema> {
    const request$ = this.http.post<Tema>(this.baseUrl, tema);
    return await lastValueFrom<Tema>(request$);

    //return this.http.post<Tema>(this.baseUrl, tema);
  }

  async read(): Promise<Tema[]> {
    const request$ = this.http.get<Tema[]>(this.baseUrl);
    return lastValueFrom<Tema[]>(request$);
  }

  async readById(id: string): Promise<Tema> {
    const request$ = this.http.get<Tema>(`${this.baseUrl}/${id}`);

    return await lastValueFrom<Tema>(request$);
  }

  async update(tema: Tema): Promise<Tema> {
    const request$ = this.http.put<Tema>(`${this.baseUrl}/${tema.id}`, tema);

    return await lastValueFrom<Tema>(request$);
  }

  async delete(id: number): Promise<Tema> {
    const request$ = this.http.delete<Tema>(`${this.baseUrl}/${id}`);

    return await lastValueFrom<Tema>(request$);
  }

  // create(tema: Tema): Observable<Tema> {
  //   return this.http.post<Tema>(this.baseUrl, tema);
  // }

  // read(): Observable<Tema[]> {
  //   return this.http.get<Tema[]>(this.baseUrl);
  // }

  // readById(id: string): Observable<Tema> {
  //   const url = `${this.baseUrl}/${id}`;
  //   return this.http.get<Tema>(url);
  // }

  // update(tema: Tema): Observable<Tema> {
  //   const url = `${this.baseUrl}/${tema.id}`;
  //   return this.http.put<Tema>(url, tema);
  // }

  // delete(id: number): Observable<Tema> {
  //   const url = `${this.baseUrl}/${id}`;
  //   return this.http.delete<Tema>(url);
  // }
}
