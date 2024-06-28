import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-digitalmarketing-portfolio',
  templateUrl: './digitalmarketing-portfolio.component.html',
  styleUrls: ['./digitalmarketing-portfolio.component.css'],
  standalone:true,
  imports: [CommonModule,RouterModule,]
})
export class DigitalmarketingPortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
