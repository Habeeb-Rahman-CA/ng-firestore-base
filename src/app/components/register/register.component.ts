import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  authService = inject(AuthService)
  router = inject(Router)

  email: string = ''
  password: string = ''

  register() {
    this.authService.register(this.email, this.password)
    alert('user registered');
    this.router.navigate(['/login'])
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
  }

}
