import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  showAlerts = false;
  parentFormValues: any;
  constructor() { }
}
