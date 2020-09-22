import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { HomeService } from './feature-modules/home/home.service';
import { faInfoCircle, faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blitzResumeUI';
  faInfoCircle = faInfoCircle;
  faHome = faHome;
  faArrowLeft = faArrowLeft;

  constructor(public homeService: HomeService, private router: Router, private location: Location) { }

  navigateToHome() {
    this.homeService.showAlerts = false;
    this.router.navigate(['/']);
  }

  navigateBack() {
    this.homeService.showAlerts = false;
    this.location.back();
  }
}
