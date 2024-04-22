const containerElt = document.querySelector(".container");

async function geojs() {
    const getGeojs = await fetch ("https://get.geojs.io/v1/ip/geo.json");
    const geoObj = await getGeojs.json();
    console.log(geoObj);
    const {latitude, longitude, city, country, region} = geoObj;
    console.log(latitude, longitude, country, city);
    
    const regionContainerElt = document.createElement ("div");
    regionContainerElt.className = "regionContainer";

    const cityContainerElt = document.createElement ("div");
    cityContainerElt.className = "cityContainer";

    const countryElt = document.createElement ("p");
    const regionElt = document.createElement ("p");
    const cityElt = document.createElement ("p");

    weather(geoObj);
}

async function weather (){
    const response = await fetch(`https://api.open-meteo.com/v1/dwd-icon?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,is_day,precipitation,weather_code&hourly=is_day&forecast_days=1`);
    const obj = await response.json();
    console.log(obj);
    const {latitude, longitude, current, current_units} = obj;
}
geojs()