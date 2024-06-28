import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ForcepagetopComponent } from '../shared/forcepagetop/forcepagetop.component';
import { FooterComponent } from '../footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  standalone: true,
  imports: [CommonModule, ForcepagetopComponent, FooterComponent, MatFormFieldModule, MatInputModule, ReactiveFormsModule]
})
export class ContactUsComponent {

  contactForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
    } else {
      console.log('Form not valid');
    }
  }

  get f() {
    return this.contactForm.controls;
  }

}
