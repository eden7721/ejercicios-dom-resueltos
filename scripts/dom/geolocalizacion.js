const d = document,
    n = navigator,
    w = window;

export default function getGeoLocation(id){
    const $id = d.getElementById(id),
        options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };
    const succes = position => {
        let c = position.coords;
        console.log(position);

        $id.innerHTML = `
            <p>Tu posición actual es:</p>
            <ul>
                <li>Latitud: <b>${c.latitude}</b></li>
                <li>Longitud: <b>${c.longitude}</b></li>
                <li>Precisión: <b>${c.accuracy}</b> metros</li>
            </ul>
            <a href="https://google.com/maps/@${c.latitude},${c.longitude},20z" target="_blank" rel="noopener">Ver en google maps</a>
        `;
    }
    const error = err => {
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
        console.log(`Error ${err.code}: ${err.message}`);
    }
        
    n.geolocation.getCurrentPosition(succes, error, options);
}