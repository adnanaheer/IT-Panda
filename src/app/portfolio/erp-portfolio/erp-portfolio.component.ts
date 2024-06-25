import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-erp-portfolio',
  templateUrl: './erp-portfolio.component.html',
  styleUrls: ['./erp-portfolio.component.css'],
  standalone:true,
  imports: [CommonModule,RouterModule,]
})
export class ErpPortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
