import { Component, Input, OnInit } from '@angular/core';
import { TemaService } from '../tema.service';
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

  constructor(private temaService: TemaService) {}

  ngOnInit(): void {
    this.temaService.read().subscribe((temas: Tema[]) => {
      this.temas = temas;
    });
  }
}
