import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
@Component({
  selector: 'app-login',
  standalone: true,
  imports:[FormsModule, CommonModule, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = ''; 
  password: string = ''; 

  handleLogin() {
    console.log('E-mail :', this.email);
    console.log('Mot de passe :', this.password);

    if (this.email && this.password) {
      alert('Connexion réussie');
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }
}