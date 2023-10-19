import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent {

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/Bienvenido']);

  }
}
