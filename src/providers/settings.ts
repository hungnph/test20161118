import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class Settings {

  settings: any[];
  constructor() {
    this.settings = [
      {
        name: "Geolocalisation",
        value: true
      },
      {
        name: "Contact",
        value: true
      }
    ];
  }

}
