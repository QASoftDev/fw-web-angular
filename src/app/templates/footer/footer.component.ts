import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  author?: string;
  isShowContact: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.author = 'Rodrigo Acevedo';
  }
}
