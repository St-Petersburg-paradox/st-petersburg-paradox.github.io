"use strict";
var prizePool;
var totalWinnings = 0;
var coin;
var winnings = {}
var accumulate = {}
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
    for (let i = 2; i <= prizePool; i * 2) {
      if (!!accumulate[prizePool]) {
        accumulate[prizePool] ++;
      } else {
        accumulate[prizePool] = 1;
      }
    }
    for (let i = 2; i < highest; i * 2) {
      percents[i] = winnings[i] / total;
    }
    //TODO: fix bar
    document.getElementById("a2").style.width = accumulate[prizePool] / total * 100 + '%';
    document.getElementById("a4").style.width = accumulate[prizePool] / total * 100 + '%';
    document.getElementById("a8").style.width = accumulate[prizePool] / total * 100 + '%';
    document.getElementById("a16").style.width = accumulate[prizePool] / total * 100 + '%';
    document.getElementById("a32").style.width = accumulate[prizePool] / total * 100 + '%';
    document.getElementById("a64").style.width = accumulate[prizePool] / total * 100 + '%';
    document.getElementById("a128").style.width = accumulate[prizePool] / total * 100 + '%';
    document.getElementById("a256").style.width = accumulate[prizePool] / total * 100 + '%';
    document.getElementById("a512").style.width = accumulate[prizePool] / total * 100 + '%';
    document.getElementById("a1024").style.width = accumulate[prizePool] / total * 100 + '%';
    document.getElementById("a2048").style.width = accumulate[prizePool] / total * 100 + '%';
    //TODO: stats; hard one
  }
}
setInterval(simulation, 0);
