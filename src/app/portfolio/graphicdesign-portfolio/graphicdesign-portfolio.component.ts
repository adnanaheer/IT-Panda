import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-graphicdesign-portfolio',
  templateUrl: './graphicdesign-portfolio.component.html',
  styleUrls: ['./graphicdesign-portfolio.component.css'],
  standalone:true,
  imports: [CommonModule,RouterModule,]
})
export class GraphicdesignPortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
