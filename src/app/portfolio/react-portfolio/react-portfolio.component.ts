import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-react-portfolio',
  templateUrl: './react-portfolio.component.html',
  styleUrls: ['./react-portfolio.component.css'],
  standalone:true,
  imports: [CommonModule,RouterModule,]
})
export class ReactPortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
