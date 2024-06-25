import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ForcepagetopComponent } from '../shared/forcepagetop/forcepagetop.component';
import { FooterComponent } from '../footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  standalone:true,
  imports: [CommonModule,ForcepagetopComponent,FooterComponent,MatFormFieldModule,MatInputModule]
})
export class ContactUsComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

}
