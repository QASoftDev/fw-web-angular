import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private headServise: HeaderService) {}

  ngOnInit(): void {}

  get title(): string {
    return this.headServise.headerData.title;
  }

  get icon(): string {
    return this.headServise.headerData.icon;
  }

  get routeUrl(): string {
    return this.headServise.headerData.routeUrl;
  }
}
