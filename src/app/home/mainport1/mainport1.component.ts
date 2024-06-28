import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainport1',
  templateUrl: './mainport1.component.html',
  styleUrls: ['./mainport1.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class Mainport1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
