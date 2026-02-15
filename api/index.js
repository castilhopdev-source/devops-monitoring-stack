const express = require("express");
const client = require("prom-client");

const app = express();
const register = new client.Registry();

client.collectDefaultMetrics({ register });

const httpRequestCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total de requisições HTTP",
});

register.registerMetric(httpRequestCounter);

app.get("/", (req, res) => {
  httpRequestCounter.inc();
  res.send("API funcionando 🚀");
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
