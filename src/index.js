
function refreshWeather(response){
let 
}



function searchCity(city){
let apiKey ="cfab87o4ce22c3f3ec5eaaftfbfbdc0e";
let apiUrl ='https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric';

axios.get(apiUrl).then(refreshWeather);
}



function handleSearchSubmit(event){
event.preventDefault();

let searchInput = document.querySelector("#search-form-input");

let cityElement = document.querySelector("#city");
cityElement.innerHTML = searchInput.value;
searchCity(searchInput.value);
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handleSearchSubmit);