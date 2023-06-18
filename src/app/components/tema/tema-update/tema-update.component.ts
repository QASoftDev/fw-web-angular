import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TemaService } from '../tema.service';
import { Tema } from '../tema.model';

@Component({
  selector: 'app-tema-update',
  templateUrl: './tema-update.component.html',
  styleUrls: ['./tema-update.component.css'],
})
export class TemaUpdateComponent implements OnInit {
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

  updatetema(): void {
    this.temaService.update(this.tema).subscribe(() => {
      this.temaService.showMessage('Tema atualizado com sucesso!');
      this.router.navigate(['/temas']);
    });
  }

  cancel(): void {
    this.router.navigate(['/temas']);
  }
}
