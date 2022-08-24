import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../aauth/services/auth.service';
import { Auth } from '../../../aauth/interfaces/auth.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }
  logout(){
      this.router.navigate(['./auth']);
  }
  get auth():Auth {
    return this.authService.auth;
  }
}
