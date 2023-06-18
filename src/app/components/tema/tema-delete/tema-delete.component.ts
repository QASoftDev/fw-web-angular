import { Component, OnInit } from '@angular/core';
import { Tema } from '../tema.model';
import { TemaService } from '../tema.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css'],
})
export class TemaDeleteComponent implements OnInit {
  tema: Tema = {} as Tema;

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.temaService.readById(id as string).subscribe((tema) => {
      this.tema = tema;
    });
  }

  deleteTema(): void {
    this.temaService.delete(this.tema.id as number).subscribe(() => {
      this.temaService.showMessage('tema excluído com sucesso!');
      this.router.navigate(['/temas']);
    });
  }

  cancel(): void {
    this.router.navigate(['/temas']);
  }
}
