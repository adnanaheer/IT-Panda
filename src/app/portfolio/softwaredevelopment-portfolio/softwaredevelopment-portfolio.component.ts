import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-softwaredevelopment-portfolio',
  templateUrl: './softwaredevelopment-portfolio.component.html',
  styleUrls: ['./softwaredevelopment-portfolio.component.css'],
  standalone:true,
  imports: [CommonModule,RouterModule,]
})
export class SoftwaredevelopmentPortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
