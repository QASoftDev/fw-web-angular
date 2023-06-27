import { Component, Input, OnInit } from '@angular/core';
//import { TemaService } from '../tema.service';
import { TemaService } from '../tema.service-promise';
import { Tema } from '../tema.model';

@Component({
  selector: 'app-tema-read',
  templateUrl: './tema-read.component.html',
  styleUrls: ['./tema-read.component.css'],
})
export class TemaReadComponent implements OnInit {
  @Input() infoTemaRead: string = {} as string;

  temas: Tema[] = [];

  displayedColumns = ['id', 'nome', 'descricao', 'acoes'];

  //constructor(private temaService: TemaService) {}
  constructor(private temaService: TemaService) {}

  ngOnInit(): void {
    this.temaService
      .read()
      .then((t: Tema[]) => {
        console.log('Passou aqui no read', t);
        this.temas = t;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
