var doors = ["A", "B", "C"]
var picked = 0;
var car;
var open;
var stay = 0;
var swap = 0;
var total = 0;
var percent;
var toggle = () => {
  running = !running;
  if (running) {
    document.getElementById("button").innerHTML = "Stop";
  } else {
    document.getElementById("button").innerHTML = "Start";
  }
}
var simulation = () => {
  if (running) {
    car = Math.floor(Math.random() * 3);
    if (!car) {
      open = Math.floor(Math.random() * 2) + 1;
    } else if (car == 1) {
      open = 2;
    } else if (car == 2) {
      open = 1;
    }
    if (!car) {
      stay ++;
      total ++;
    } else if ((car == 1 && open == 2) || (car == 2 && open == 1)) {
      swap ++;
      total ++;
    }
    percent = ((swap / total) || 50) * 100;
    document.getElementById("part").style.width = String(percent) + '%';
    document.getElementById("stats").innerHTML =
      `Switch: <b>${swap}</b> of ${total} (<b>${percent} %</b>) / Stay: <b>${stay}</b> of ${total} (<b>${100 - percent} %</b>)`;
  }
}
setInterval(simulation, 0);