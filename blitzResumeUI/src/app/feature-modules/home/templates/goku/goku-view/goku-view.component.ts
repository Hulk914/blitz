import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../home.service';
import { faPrint, faArrowCircleDown, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { GOKU_SAMPLE } from '../../../../../models/goku-sample';

@Component({
  selector: 'app-goku-view',
  templateUrl: './goku-view.component.html',
  styleUrls: ['./goku-view.component.css']
})
export class GokuViewComponent implements OnInit {
  // change to interface once validations added in goku input
  faPrint = faPrint;
  faArrowCircleDown = faArrowCircleDown;
  faInfoCircle = faInfoCircle;
  personalDetails: any = {};
  professionalDetails: any = {};
  educationDetails: any = {};
  additionalDetails: any = {};
  showStatic = false;
  lineBreak = { 0: [], 1: [], 2: [], 3: [], 4: [] };
  constructor(public homeService: HomeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.homeService.parentFormValues);
    // view sample
    if (this.activatedRoute.snapshot.queryParams && this.activatedRoute.snapshot.queryParams.isSample) {
      const sampleData = GOKU_SAMPLE;
      this.personalDetails = sampleData.personalDetailsForm;
      this.professionalDetails = sampleData.professionalDetailsForm;
      this.educationDetails = sampleData.educationDetailsForm;
      this.additionalDetails = sampleData.additionalDetailsForm;
    }
    // view user input data
    else if (this.homeService.parentFormValues) {
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
