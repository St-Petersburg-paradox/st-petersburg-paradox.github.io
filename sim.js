"use strict";
var prizePool;
var coin;
var winnings = {}
var total = 0;
var percents = {};

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
    if (!!winnings[prizePool]) {
      winnings[prizePool] ++;
    } else {
      winnings[prizePool] = 1;
    }
    //TODO: percents
    //TODO: fix bar
    //TODO: stats
  }
}
setInterval(simulation, 0);