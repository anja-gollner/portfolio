import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule, CommonModule, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
//   http = inject(HttpClient);

//   contactData = {
//     name: '',
//     email: '',
//     message: '',
//   };

//   emailSent = false;
//   privacyPolicyChecked = false;
//   formSubmitted = false;

//   post = {
//     endPoint: 'https://anja-gollner.com/sendMail.php',
//     body: (payload: any) => JSON.stringify(payload),
//     options: {
//       headers: {
//         'Content-Type': 'text/plain',
//         responseType: 'text',
//       },
//     },
//   };


//   onSubmit(ngForm: NgForm) {
    
//     if (ngForm.submitted && ngForm.form.valid) {
//       this.formSubmitted = true;
//       this.http.post(this.post.endPoint, this.post.body(this.contactData))
//         .subscribe({
//           next: () => {
//             this.emailSent = true;
//             ngForm.resetForm();
//           },
//           error: (error) => {
//             console.error(error);
//           },
//           complete: () => console.info('send post complete'),
//         });
//     } else if (ngForm.submitted && ngForm.form.valid) {
//       ngForm.resetForm();
//   }
// }
}