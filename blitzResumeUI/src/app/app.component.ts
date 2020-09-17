import { Component } from '@angular/core';
import { HomeService } from './feature-modules/home/home.service';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blitzResumeUI';
  faInfoCircle = faInfoCircle;
  constructor(public homeService: HomeService) { }
}
