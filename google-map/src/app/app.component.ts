import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first ';

  //Map zoomed by 8 - zooms in a bit
  zoom: number = 8;

  //Lahore's lat lng
  lat: number = 31.5204;
  lng: number = 74.3587;

  //Markers
  markers: marker[] = [
    {
      name : 'Faisalabad',
      lat : 31.4504,
      lng : 73.1350,
      draggable : true

    },
    {
      name : 'Islamabad',
      lat : 33.6844,
      lng : 73.0479,
      draggable : true

    },
    {
      name : 'Sialkot',
      lat : 32.4945,
      lng : 74.5229,
      draggable : true

    },
    {
      name : 'Lahore',
      lat: 31.5204,
      lng: 74.3587,
      draggable : true
    }

  ];

  constructor(){

  }

  //Making the methods which are called in the html
  clickedMarker(marker:marker, index:number){
    console.log('Clicked Marker' + marker.name + 'at index' + index);

  }

  //We are clicking and adding a marker and it cannot be dragged
  clickMap($event:any){

    var newMarker = {
      name:'Undecided',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      dragging: false

    }

    this.markers.push(newMarker);

  }

}


  //Marker type
  interface marker {

  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;

  }
