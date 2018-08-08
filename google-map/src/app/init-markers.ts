export class Init{
    //creating a database to store the markers' info
    load (){
      if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined){
        console.log('No markers found');

        var markers = [
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

          }

        ];

        localStorage.setItem('markers', JSON.stringify(markers));


      } else {
        console.log('loading markers');

      }

    }
}
