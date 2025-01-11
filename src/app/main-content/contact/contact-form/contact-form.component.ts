import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, TranslateModule, CommonModule, RouterLink],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  privacyPolicyChecked = false;
  formSubmitted = signal(false);
  emailFocused = false;
  errorMessage: string = '';

  mailTest = false;

  post = {
    endPoint: 'http://anja-gollner.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.formSubmitted = signal(true);
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: () => {
            ngForm.resetForm();
          },
          error: () => {
            this.errorMessage =
              'Error sending the message. Please try again later.';
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.errorMessage =
        'Please fill out all fields correctly and ensure the message has at least 10 words.';
      ngForm.resetForm();
    }
  }

  // Wenn man nicht mehr testet, kann der ganze elseif Teil raus

  // onSubmit(ngForm: NgForm) {
  //   if (ngForm.valid && ngForm.submitted) {
  //     this.formSubmitted = signal(true);
  //     console.log(this.contactData);
  //   }
  // }
}
