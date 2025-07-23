import { NgModule } from '@angular/core';
import {RouterModule ,Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { MedecinComponent } from './medecin/medecin.component';
import { PatientComponent } from './patient/patient.component';
import { LoginComponent } from './login/login.component';
import { SpecialitiesComponent } from './speciality/speciality.component';
import { ConsultationComponent } from './consultation/consultation.component';

export const routes: Routes = [
    { path: '', component: ContentComponent }, // Page d'accueil
    { path:'medecin', component: MedecinComponent},
    { path:'patient', component: PatientComponent},
    { path:'login', component: LoginComponent},
    {path: 'speciality', component: SpecialitiesComponent},
    { path: 'consultation', component: ConsultationComponent },
   

    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  