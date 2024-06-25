import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
