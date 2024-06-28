import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-angular-portfolio',
  templateUrl: './angular-portfolio.component.html',
  styleUrls: ['./angular-portfolio.component.css'],
  standalone:true,
  imports: [CommonModule,RouterModule,]
})
export class AngularPortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
