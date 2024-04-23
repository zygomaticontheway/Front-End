/*
{
  "categories": [],
  "created_at": "2020-01-05 13:42:18.823766",
  "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  "id": "zLV5Ys8FTNSNnBm7xBWAjg",
  "updated_at": "2020-01-05 13:42:18.823766",
  "url": "https://api.chucknorris.io/jokes/zLV5Ys8FTNSNnBm7xBWAjg",
  "value": "Chuck Norris can play super mario on SEGA"
}
*/
const buttonElt = document.getElementById("refreshButton");
const h1Elt = document.getElementById("h1");
const iconElt = document.getElementById("icon");

buttonElt.addEventListener("click", fetchData)

function fetchData (){
    fetch ("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then((obj) => {
            const {icon_url, value} = obj;
            h1Elt.textContent = value;
            iconElt.src = "https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png";
            // iconElt.alt = icon_url;
            console.log(obj);
            })
            
}
fetchData ()