const API_KEY = "b7b35d43b80bddcea1f63823dbfb56b6";

function ok(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => {
      console.log("response: ", response);
      return response.json();
    })
    .then((data) => {
      console.log("data: ", data);
      const city = document.querySelector("#weather span:first-child");
      city.innerText = data.name;
      const weather = document.querySelector("#weather span:last-child");
      weather.innerText = `/ ${data.weather[0].main} / ${data.main.temp}`;
    });
}
function error() {
  alert("위치 정보 받는 것을 허용해 주세요.");
}

navigator.geolocation.getCurrentPosition(ok, error);
