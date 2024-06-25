import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landingpage-portfolio',
  templateUrl: './landingpage-portfolio.component.html',
  styleUrls: ['./landingpage-portfolio.component.css'],
  standalone:true,
  imports: [CommonModule,RouterModule,]
})
export class LandingpagePortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
