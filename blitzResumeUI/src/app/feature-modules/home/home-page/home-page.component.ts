import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  faInfoCircle = faInfoCircle;
  templatesList = [
    { available: true, name: 'goku' },
    { available: false },
    { available: false },
    { available: false },
    { available: false },
    { available: false }
  ];
  constructor(
    private router: Router, private homeService: HomeService
  ) { }

  ngOnInit(): void {
  }

  onTemplateSelection(template) {
    if (template.available && template.name) {
      this.homeService.parentFormValues = null;
      this.router.navigate(['template', template.name, 'input']);
    }
  }

  onViewSample(template) {
    if (template.available && template.name) {
      this.homeService.showAlerts = true;
      this.router.navigate(['template', template.name, 'view'], { queryParams: { isSample: true } });
    }
  }

}
