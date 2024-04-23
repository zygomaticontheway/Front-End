//по мотивам https://wttr.in/

const button = document.getElementById("refreshButton");

const links = [
    {
        url: "https://wttr.in/Amsterdam",
        params: {
            3: "",
            m: "",
            lang: "en"
        }
    },
    {
        url: "https://wttr.in/Weinheim",
        params: {
            3: "",
            m: "",
            lang: "de"
        }
    },
    {
        url: "https://wttr.in/Paris",
        params: {
            3: "",
            m: "",
            lang: "fr"
        }
    },
    {
        url: "https://wttr.in/London",
        params: {
            3: "",
            m: "",
            lang: "en"
        }
    },
    {
        url: "https://wttr.in/Kyiv",
        params: {
            3: "",
            m: "",
            lang: "uk"
        }
    },
    {
        url: "https://wttr.in/Roma",
        params: {
            3: "",
            m: "",
            lang: "it"
        }
    }
]
function fetchData (){
    for (const link of links) { //перебор ссылок
        const {url, params} = link; //диструктуризация ссылки (извлекается url и params из объекта link)
        const queryString = new URLSearchParams(params).toString();
        fetch(`${url}?${queryString}`)
            .then((response) => response.text())
            .then((pageText) => {
                const result = document.getElementById("content")
                result.innerHTML = pageText //Свойство innerHTML позволяет считать содержимое элемента в виде HTML-строки или установить новый HTML. HTML-строкой является строка, которая содержит валидную HTML-разметку, в innerHTML нельзя передать DOM-элемент.
            })
    }
}
button.addEventListener("click", fetchData)