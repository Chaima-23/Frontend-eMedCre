import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";


@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
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
 
}


