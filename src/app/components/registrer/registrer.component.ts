import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { UsrAuthService } from 'src/app/services/usr-auth.service';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css'],
})
export class RegistrerComponent {
  registrationForm: FormGroup;
  constructor(private userService: UsrAuthService, private router: Router) {
    this.registrationForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      const formData = this.registrationForm.value;
      this.userService
        .register(formData)
        .then((response) => {
          if (response != null) {
            this.router.navigate(['/Home']);
          }
        })
        .catch((error) => {
          console.error('Error al registrar:', error);
        });
    }
  }
}
