import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { UsrAuthService } from 'src/app/services/usr-auth.service';
import Swal from 'sweetalert2';

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
        .then((response: any) => {
          if (response.success) {
            this.router.navigate(['/Home']);
          } else {
            Swal.fire({
              title: 'Error',
              text: response.error,
              icon: 'error',
            });
          }
        })
        .catch((error) => {
          Swal.fire({
            title: 'Error',
            text: 'El usuario ya existe.',
            icon: 'error',
          });
        });
    }
  }

}
