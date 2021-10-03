const clockPosition = document.getElementById("clock");

function getTime() {
  const time = new Date();
  const hours = JSON.stringify(time.getHours()).padStart(2, "0");
  const minutes = JSON.stringify(time.getMinutes()).padStart(2, "0");
  const seconds = JSON.stringify(time.getSeconds()).padStart(2, "0");

  const clock = `${hours}:${minutes}:${seconds}`;
  clockPosition.innerText = clock;
}

function paintClock() {
  setInterval(getTime, 1000);
}

paintClock();
