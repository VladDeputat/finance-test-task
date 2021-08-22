"use strict";
const express = require("express");
const http = require("http");
const io = require("socket.io");
const cors = require("cors");

const FETCH_INTERVAL = 5000;
const PORT = process.env.PORT || 4000;
let interval = FETCH_INTERVAL;

const initialTickers = [
  "AAPL", // Apple
  "GOOGL", // Alphabet
  "MSFT", // Microsoft
  "AMZN", // Amazon
  "FB", // Facebook
  "TSLA", // Tesla
];

let tickersToRecommend = [];
let tickersToShow = [...initialTickers];

function randomValue(min = 0, max = 1, precision = 0) {
  const random = Math.random() * (max - min) + min;
  return random.toFixed(precision);
}

function utcDate() {
  const now = new Date();
  return new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds()
  );
}

function getQuotes(socket) {
  const quotes = tickersToShow.map((ticker) => ({
    ticker,
    exchange: "NASDAQ",
    price: randomValue(100, 300, 2),
    change: randomValue(0, 200, 2),
    change_percent: randomValue(0, 1, 2),
    dividend: randomValue(0, 1, 2),
    yield: randomValue(0, 2, 2),
    last_trade_time: utcDate(),
  }));

  socket.emit("ticker", quotes);
}

function trackTickers(socket) {
  // run the first time immediately
  getQuotes(socket);

  // every N seconds
  const timer = setInterval(function () {
    getQuotes(socket);
  }, interval);

  socket.on("disconnect", function () {
    clearInterval(timer);
  });
}

const app = express();
app.use(cors());
const server = http.createServer(app);

const socketServer = io(server, {
  cors: {
    origin: "*",
  },
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

socketServer.on("connection", (socket) => {
  socket.emit("curInterval", interval);
  socket.on("start", () => {
    trackTickers(socket);
  });
  socket.emit("tickersToRecommend", tickersToRecommend);
  socket.on("timer", (time) => {
    interval = time * 1000;
  });
  socket.on("setTicker", (ticker) => {
    tickersToRecommend = tickersToRecommend.filter((item) => item !== ticker);
    tickersToShow = initialTickers.filter(
      (item) => !tickersToRecommend.includes(item)
    );
    getQuotes(socket);
    socket.emit("tickersToRecommend", tickersToRecommend);
  });
  socket.on("unsetTicker", (ticker) => {
    if (!tickersToRecommend.includes(ticker)) {
      tickersToRecommend.push(ticker);
    }
    tickersToShow = initialTickers.filter(
      (item) => !tickersToRecommend.includes(item)
    );
    getQuotes(socket);
    socket.emit("tickersToRecommend", tickersToRecommend);
  });
});

server.listen(PORT, () => {
  console.log(`Streaming service is running on http://localhost:${PORT}`);
});
