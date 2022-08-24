import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  ngOnInit(): void {
  }
  constructor(private router: Router,
              private authService: AuthService) { }

  login() {
    // Ir al backend
    // un usuario
    this.authService.login()
      .subscribe(resp => {
        console.log(resp);

        if (resp.id) {
          this.router.navigate(['./personas']);
        }
      })
  }

  ingresarSinLogin() {
    this.authService.logout();
    this.router.navigate(['./personas']);
  }

}
