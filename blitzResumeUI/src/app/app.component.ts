import { Component } from '@angular/core';
import { HomeService } from './feature-modules/home/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blitzResumeUI';
  constructor(public homeService: HomeService) { }
}
