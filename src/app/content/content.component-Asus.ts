import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  images: string[]= [
    'assets/img11.jpg'
  ];

  constructor (private router: Router){}
   goToLogin(){
     this.router.navigate(["/login"])
   }
   goToPatient(){
    this.router.navigate(["/patient"])
  }

}
