"use strict";
var prizePool;
var totalWinnings = 0;
var coin;
var winnings = {}
var total = 0;
var percents = {};
var highest = 0;

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
    //TODO: simulation
    prizePool = 1;
    coin = !0;
    while (coin) {
      prizePool *= 2;
      coin = !!Math.round(Math.random());
    }
    total ++;
    highest = Math.max(highest, prizePool);
    totalWinnings += prizePool;
    if (!!winnings[prizePool]) {
      winnings[prizePool] ++;
    } else {
      winnings[prizePool] = 1;
    }
    //TODO: percents
    for (let i = 2; i < highest; i * 2) {
      percents[i] = winnings[i] / total;
    }
    //TODO: fix bar
    //TODO: stats
  }
}
setInterval(simulation, 0);