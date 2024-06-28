import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-websitedesign-portfolio',
  templateUrl: './websitedesign-portfolio.component.html',
  styleUrls: ['./websitedesign-portfolio.component.css'],
  standalone:true,
  imports: [CommonModule,RouterModule,]
})
export class WebsitedesignPortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
