import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobappdevelopment-portfolio',
  templateUrl: './mobappdevelopment-portfolio.component.html',
  styleUrls: ['./mobappdevelopment-portfolio.component.css'],
  standalone:true,
  imports: [CommonModule,RouterModule,]
})
export class MobappdevelopmentPortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
