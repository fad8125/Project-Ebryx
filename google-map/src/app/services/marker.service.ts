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

  addMarker(newMarker){
    //Getting the curreently present markers which are mapped
    var markers = JSON.parse(localStorage.getItem('markers'));

    //Now we want to push the new ones
    markers.push(newMarker);

    //Now updating the local storage again by setting the markers
    localStorage.setItem('markers', JSON.stringify(markers));

  }


  updateMarker(marker, newLat, newLng){
    //Getting the curreently present markers which are mapped
    var markers = JSON.parse(localStorage.getItem('markers'));

    for(var i = 0; i <markers.length ; i++ ){
      if( marker.lat == markers[i].lat && marker.lng == markers[i].lng ){
        markers[i].lat = newLat;
        markers[i].lng = newLng;

      }

    }

    //Now updating the local storage again by setting the markers
    localStorage.setItem('markers', JSON.stringify(markers));


  }

}
