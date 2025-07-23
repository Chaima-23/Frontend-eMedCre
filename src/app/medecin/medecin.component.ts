import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  imports: [FormsModule, CommonModule, NavbarComponent], 
  styleUrls: ['./medecin.component.css'],
  standalone: true,
})
export class MedecinComponent {
  login: boolean = false; // Formulaire d'inscription affiché par défaut
  loading: boolean = false;


  dsLogin = {
    email: '',
    password: ''
  };
  profileData = {
    lastName: '',
    firstName: '',
    address: '',
    phone: '',
    speciality:'',
    customSpeciality: ''
  };
  specialities: string[] = [' médecine générale', 'Dermatologie', 'Pédiatrie', 'Psychiatre ', 'Gynécologie'];

  checkSpeciality() {
    if (this.profileData.speciality === 'autre') {
      this.profileData.customSpeciality = ''; // Réinitialise le champ custom
    }
  }

  userData = {
    email: '',
    password: ''
  };
  btnDynamicName: string = 'S\'inscrire'; // Changer le texte du bouton pour "S'inscrire" par défaut

  loginFunction() {
    this.loading = true;
  }

  registerUserAndProfile() {
    this.loading = true;
  }

  /*inscriptionPage() {
    this.login = false;
  }

  loginPage() {
    this.login = true;
  }*/
}
