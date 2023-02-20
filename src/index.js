let pressSubmit = document.querySelector("#submit");
pressSubmit.addEventListener("submit", changeCity);

let form = document.querySelector("#searchCity");
form.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    event.preventDefault();
    document.querySelector("#submit").submit();
  }
});

function changeCity(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#searchCity");
  let cityName = document.querySelector("#cityName");
  let value = searchCity.value;
  cityName.innerHTML = value;
  Name(value);
}

let today = document.querySelector("#date");
let now = new Date();
let day = now.getDay();
let month = now.getMonth();
let year = now.getFullYear();
let hour = now.getHours();
let minute = now.getMinutes();

today.innerHTML = `Today  ${day}/${month}/${year} &nbsp&nbsp&nbsp&nbsp&nbsp Time  ${hour}:${minute}`;

function showDegreeC(temperature) {
  let degree = document.querySelector("#degree");
  degree.innerHTML = temperature + "<sup>°C</sup>";
}

function weather(response) {
  let temperature = Math.round(response.data.main.temp);
  showDegreeC(temperature);
}

function Name(value) {
  let apiKey = "c5f0e59acac64258bb92ed027d20c68f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(weather);
}
