const containerElt = document.querySelector(".container");
const ip = "176.199.208.229";

async function geojs() {
    const getGeojs = await fetch ("https://get.geojs.io/v1/ip/geo.json");
    const geoObj = await getGeojs.json();
    console.log(geoObj);
    const {latitude, longitude, city, country, region} = geoObj;
    console.log(latitude, longitude, country, city, region);
    
    const regionContainerElt = document.createElement ("div");
    regionContainerElt.className = "regionContainer";

    const cityContainerElt = document.createElement ("div");
    cityContainerElt.className = "cityContainer";

    const countryElt = document.createElement ("span");
    const regionElt = document.createElement ("span");
    const cityElt = document.createElement ("span");

    regionContainerElt.append (countryElt, regionElt);
    
    cityContainerElt.append (cityElt);

    weather(geoObj);
}

async function weather (){
    const response = await fetch(`https://api.open-meteo.com/v1/dwd-icon?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,is_day,precipitation,weather_code&hourly=is_day&forecast_days=1`);
    const obj = await response.json();
    console.log(obj);
    const {latitude, longitude, current, current_units} = obj;
}
geojs()