const containerElt = document.getElementById("container");
const ip = "176.199.208.229";

async function geojs() {
    const getGeojs = await fetch ("https://get.geojs.io/v1/ip/geo.json");
    const geoObj = await getGeojs.json();
    console.log(geoObj);
    const {latitude, longitude, city, country, region} = geoObj;
    console.log(latitude, longitude, country, city, region);

    const regionContainerElt = document.createElement ("div");
    regionContainerElt.className = "regionContainer";
    regionContainerElt.innerText = `${country}/${region}`

    containerElt.append(regionContainerElt);

    

    weather(latitude, longitude, city);

}

async function weather (latitude, longitude, city){
    const response = await fetch(`https://api.open-meteo.com/v1/dwd-icon?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,is_day,precipitation,weather_code&hourly=is_day&forecast_days=1`);
    const obj = await response.json();
    console.log(obj);
    const {current, current_units} = obj;

    const cityContainerElt = document.createElement ("div");
    cityContainerElt.className = "cityContainer";
    cityContainerElt.innerText = `In ${city} is ${current.temperature_2m}${current_units.temperature_2m}`;

    containerElt.append(cityContainerElt);


    
    

}
geojs()