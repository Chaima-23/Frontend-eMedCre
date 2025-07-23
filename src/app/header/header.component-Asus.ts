import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
 standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor (private router: Router){}
  goToMedecin(){
    this.router.navigate(["/medecin"])
  }
  goToPatient(){
    this.router.navigate(["/patient"])
  }

}
