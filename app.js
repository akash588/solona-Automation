const express = require("express");
const app = express();

const bodyParser = require("body-parser");
Automation = require("./Automation");
PolygonScan = require("./polygonscan")

app.use(express.json({ limit: "125mb" }));

const port = 7000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/init", async (req, res) => {
  let { link } = req.body;
  let tokenId = await Automation.gmailProcess(link);
  if(tokenId) {
    res.json({
      status: true,
      data: tokenId
    }) }
    else{
      res.json({
        status: false,
        data:[]
      })
  
    }
});
app.post("/init1", async (req, res) => {
  let { link } = req.body;
  let tokenId = await Automation.gmailProcess1(link);
  if(tokenId) {
    res.json({
      status: true,
      data: tokenId
    }) }
    else{
      res.json({
        status: false,
        data:[]
      })
  
    }
});
app.post("/polygon", async (req, res) => {
  let { link } = req.body;
  let tokenId = await PolygonScan.polygon(link);
  if(tokenId) {
  res.json({
    status: true,
    data: tokenId
  }) }
  else{
    res.json({
      status: false,
      data:[]
    })

  }
});


app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

process.on("unhandledRejection", (error) => {
  console.log("unhandledRejection", error.message);
});

process.on("uncaughtException", (error) => {
  console.log("uncaughtException", error.message);
});

process.on("exit", (code) => {
  console.log(`About to exit with code: ${code}`);
});

process.on("SIGKILL", function (code) {
  console.log("SIGKILL received...", code);
});

process.once("SIGINT", function (code) {
  console.log("SIGINT received...", code);
});

process.once("SIGTERM", function (code) {
  console.log("SIGTERM received...", code);
});

const checkCpuAndDelay = async () => {
  var cpu = osu.cpu;
  const getUsage = await cpu.usage();
  if (getUsage > 70) {
    console.log("---CPU USAGE--- ", getUsage);
    await delay(1000 * 30);
    return checkCpuAndDelay();
  }
  return true;
};

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

module.exports = app;
