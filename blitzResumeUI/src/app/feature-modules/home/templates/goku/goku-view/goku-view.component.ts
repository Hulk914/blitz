import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../home.service';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-goku-view',
  templateUrl: './goku-view.component.html',
  styleUrls: ['./goku-view.component.css']
})
export class GokuViewComponent implements OnInit {
  // change to interface once validations added in goku input
  faPrint = faPrint;
  personalDetails: any = {};
  professionalDetails: any = {};
  educationDetails: any = {};
  additionalDetails: any = {};
  showStatic = false;
  lineBreak = { 0: [], 1: [], 2: [], 3: [], 4: [] };
  constructor(public homeService: HomeService) { }

  ngOnInit(): void {
    console.log(this.homeService.parentFormValues);
    if (this.homeService.parentFormValues) {
      this.personalDetails = this.homeService.parentFormValues.personalDetailsForm;
      this.professionalDetails = this.homeService.parentFormValues.professionalDetailsForm;
      this.educationDetails = this.homeService.parentFormValues.educationDetailsForm;
      this.additionalDetails = this.homeService.parentFormValues.additionalDetailsForm;
    }
  }

  addBreak(index) {
    this.lineBreak[index].push(0);
  }

  removeBreak(index) {
    this.lineBreak[index].pop();
  }

  openPrintWindow() {
    window.print();
  }
}
