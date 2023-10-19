import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UsrAuthService } from 'src/app/services/usr-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy{

  protected usuario: string | null = '';
  userSubscription: any;


  constructor(private router: Router,private usrService: UsrAuthService) {
    this.userSubscription = this.usrService.getUserLoggedIn().subscribe(user => {
      if (user) {
        this.usuario = user.email;
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit() {
    (this.getUserLogeado())
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  async getUserLogeado() {
    try {
      const res = await this.usrService.getUserLoggedIn().toPromise();
      if (res?.email) {
        this.usuario = res.email;
      } else {
        this.router.navigate(['/']);
      }
    } catch (error) {
      console.error('Error al obtener el usuario logueado:', error);
    }
  }
  async logOut(){
    this.usrService.logOut().then(() => {
      console.log('llega');
      this.router.navigate(['/'])
    }).catch(err => {
      
     console.log(err);
    });

  }
}
