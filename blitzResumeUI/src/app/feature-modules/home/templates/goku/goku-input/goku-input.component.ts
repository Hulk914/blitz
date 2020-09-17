import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeService } from '../../../home.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-goku-input',
  templateUrl: './goku-input.component.html',
  styleUrls: ['./goku-input.component.css']
})
export class GokuInputComponent implements OnInit {
  faTimesCircle = faTimesCircle;

  personalDetailsFormGroup: FormGroup;
  professionalDetailsFormGroup: FormGroup;
  educationDetailsFormGroup: FormGroup;
  additionalDetailsFormGroup: FormGroup;
  parentFormGroup: FormGroup;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private formBuilder: FormBuilder, private router: Router, private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.showAlerts = false;
    this.personalDetailsFormGroup = this.formBuilder.group({
      name: [''],
      phone: [''],
      email: [''],
      state: [''],
      city: [''],
      pincode: ['']
    });
    this.professionalDetailsFormGroup = this.formBuilder.group({
      objective: [''],
      skills: [[]]
    });
    this.educationDetailsFormGroup = this.formBuilder.group({
      secondCtrl: ['']
    });
    this.additionalDetailsFormGroup = this.formBuilder.group({
      secondCtrl: ['']
    });
    this.parentFormGroup = new FormGroup({
      personalDetailsForm: this.personalDetailsFormGroup,
      professionalDetailsForm: this.professionalDetailsFormGroup,
      educationDetailsForm: this.educationDetailsFormGroup,
      additionalDetailsForm: this.additionalDetailsFormGroup
    });
  }

  viewResume() {
    this.homeService.showAlerts = true;
    this.homeService.parentFormValues = this.parentFormGroup.value;
    this.router.navigate(['template', 'goku', 'view']);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.professionalDetailsFormGroup.value.skills.push(value.trim());
      this.professionalDetailsFormGroup.get('skills').updateValueAndValidity();
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(skill): void {
    const index = this.professionalDetailsFormGroup.value.skills.indexOf(skill);

    if (index >= 0) {
      this.professionalDetailsFormGroup.value.skills.splice(index, 1);
      this.professionalDetailsFormGroup.get('skills').updateValueAndValidity();
    }
  }

}
