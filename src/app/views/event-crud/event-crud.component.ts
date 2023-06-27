import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/templates/header/header.service';

@Component({
  selector: 'app-event-crud',
  templateUrl: './event-crud.component.html',
  styleUrls: ['./event-crud.component.css'],
})
export class EventCrudComponent implements OnInit {
  @Output() infoEventoCrud = 'Eventos existentes!';

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Eventos',
      icon: 'event',
      routeUrl: '/eventos',
    };
  }

  ngOnInit(): void {}

  navigateToEventsCreate(): void {
    this.router.navigate(['/eventos/create']);
  }
}
