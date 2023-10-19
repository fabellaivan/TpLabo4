import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cartas:boolean | undefined;
  constructor(private router: Router){}
  onSubmit() {
    
      this.router.navigate(['Juegos']);
      

  }
}
