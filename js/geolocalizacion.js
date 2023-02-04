const d = document,
    n = navigator;

export default function getPosition(geolocalizacion){
    const $geolocalizacion = d.getElementById(geolocalizacion);
    
    const options = {
        enableHighAccuracy:true,
        timeout:5000,
        maximumAge:0
    };
    
    console.clear();
    if('geolocation' in navigator){
        console.log('Si hay geolocalizacion');
        console.log(n.geolocation.getCurrentPosition(success, error, options));
    }

    function success(position){
        const coord = position.coords;
        const $link = document.createElement('a');
        const $li = document.createElement('li');

        $geolocalizacion.innerHTML = `<li id="latitud"><b>Latitud:&nbsp;</b>${coord.latitude.toFixed(2)}°</li><br>
        <li id="longitud"><b>Longitud:&nbsp;</b>${coord.longitude.toFixed(2)}°</li><br>
        <li id="precision"><b>Precision:&nbsp;</b>${coord.accuracy.toFixed(2)} metros</li><br>`;

        $link.innerText = 'Ver en Google Maps';
        $link.setAttribute('href', `https://www.google.com/maps/search/?api=1&query=${coord.latitude}%2C${coord.longitude}`);
        $link.setAttribute('target','_blank');
        $geolocalizacion.insertAdjacentElement('afterend',$link);

    }




    function error(err){
        console.log(`Codigo del error: ${err.code}. ${error.message} `);
        $geolocalizacion.innerHTML = `<p><mark>Error encontrado ${err.code}: ${err.message}</mark></p>`;
    }


    

}

