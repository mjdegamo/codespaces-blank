import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  contactForm = this.fb.nonNullable.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  })

  constructor(private fb: FormBuilder) {}

  submitForm() {
    console.log(this.contactForm.getRawValue())
  }

  isFormControlValid(controlName: FormControl) {
    return controlName.invalid && controlName.touched;
  }
}
