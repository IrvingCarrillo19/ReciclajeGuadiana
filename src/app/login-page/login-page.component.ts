import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  loginData: any = {
    email: '',
    password: '',
  };

  constructor(private router: Router) {}

  validate(f: NgForm) {
    let valid = true;
    console.log('entra en la funcion');
    //valida sus chingaderas
    this.router.navigate(['/dashboard']);
    this.router.navigate(['dashboard']);
    if (valid) {
      this.router.navigate(['/dashboard']);
    }
  }
}
