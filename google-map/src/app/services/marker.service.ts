import { Injectable } from '@angular/core';
import {Init} from '../init-markers';

@Injectable({
  providedIn: 'root'
})

export class MarkerService extends Init {

  constructor() {
    super();
    console.log('MarkerService initialised');
    this.load();

  }

  getMarkers(){
    var markers = JSON.parse(localStorage.getItem('markers'));
    return markers;
  }
}
