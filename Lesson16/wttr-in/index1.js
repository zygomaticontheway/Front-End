//по мотивам https://wttr.in/

const button = document.getElementById("refreshButton");

const link =
    {
        url: "https://wttr.in/Weinheim",
        params: {
            3: "",
            m: "",
            lang: "de",
            q: "",
            T: ""
        }
    }
function fetchData (){
        const {url, params} = link; //диструктуризация ссылки (извлекается url и params из объекта link)
        const queryString = new URLSearchParams(params).toString();
        fetch(`${url}?${queryString}`)
            .then((response) => response.text())
            .then((pageText) => {
                const result = document.getElementById("content")
                result.innerHTML = pageText //Свойство innerHTML позволяет считать содержимое элемента в виде HTML-строки или установить новый HTML. HTML-строкой является строка, которая содержит валидную HTML-разметку, в innerHTML нельзя передать DOM-элемент.
            })
    }
button.addEventListener("click", fetchData)