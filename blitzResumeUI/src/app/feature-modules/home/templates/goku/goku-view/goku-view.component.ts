import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../home.service';

@Component({
  selector: 'app-goku-view',
  templateUrl: './goku-view.component.html',
  styleUrls: ['./goku-view.component.css']
})
export class GokuViewComponent implements OnInit {
  // change to interface once validations added in goku input
  personalDetails: any = {};
  professionalDetails: any = {};
  showStatic = false;
  lineBreak = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: []
  };
  constructor(public homeService: HomeService) { }

  ngOnInit(): void {
    console.log(this.homeService.parentFormValues);
    if (this.homeService.parentFormValues) {
      this.personalDetails = this.homeService.parentFormValues.personalDetailsForm;
      this.professionalDetails = this.homeService.parentFormValues.professionalDetailsForm;
    }
  }

  addBreak(index) {
    this.lineBreak[index].push(0);
  }

  removeBreak(index) {
    this.lineBreak[index].pop();
  }

}
