import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Tema } from 'src/app/components/tema/tema.model';
import { HeaderService } from 'src/app/templates/header/header.service';

@Component({
  selector: 'app-theme-crud',
  templateUrl: './theme-crud.component.html',
  styleUrls: ['./theme-crud.component.css'],
})
export class ThemeCrudComponent implements OnInit {
  @Output() infoTemaCrud = 'Temas existentes!';

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Temas',
      icon: 'celebration',
      routeUrl: '/temas',
    };
  }

  ngOnInit(): void {}

  navigateToEventsCreate(): void {
    this.router.navigate(['/temas/create']);
  }
}
