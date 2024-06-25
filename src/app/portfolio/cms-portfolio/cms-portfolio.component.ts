import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cms-portfolio',
  templateUrl: './cms-portfolio.component.html',
  styleUrls: ['./cms-portfolio.component.css'],
  standalone:true,
  imports: [CommonModule,RouterModule,]
})
export class CmsPortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
