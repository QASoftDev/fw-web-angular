import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TemaService } from '../tema.service-promise';
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
    this.temaService
      .readById(id as string)
      .then((t: Tema) => {
        // debugger;
        console.log('Passou aqui no update', t);
        this.tema = t;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updatetema(): void {
    this.temaService
      .update(this.tema)
      .then((t: Tema) => {
        // debugger;
        console.log('Passou aqui no update', t);
        this.tema = t;
        this.temaService.showMessage('Tema atualizado com sucesso!');
        this.router.navigate(['/temas']);
      })
      .catch((error) => {
        console.log(error);
      });

    //   .subscribe(() => {
    //   this.temaService.showMessage('Tema atualizado com sucesso!');
    //   this.router.navigate(['/temas']);
    // });
  }

  // ngOnInit(): void {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   this.temaService.readById(id as string).subscribe((tema) => {
  //     this.tema = tema;
  //   });
  // }

  // updatetema(): void {
  //   this.temaService.update(this.tema).subscribe(() => {
  //     this.temaService.showMessage('Tema atualizado com sucesso!');
  //     this.router.navigate(['/temas']);
  //   });
  // }

  cancel(): void {
    this.router.navigate(['/temas']);
  }
}
