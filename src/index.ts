import express, { Express } from "express";

import serverConfig from "./config/serverConfig";
import sampleQueueProducer from "./producers/sampleQueueProducer";
import apiRouter from "./routes";
import SampleWorker from "./workers/sampleWorker";

const app: Express = express();

app.use('/api', apiRouter);

app.listen(serverConfig.PORT, async () => {
  console.log(`Server started at PORT ${serverConfig.PORT}`);
  SampleWorker("SampleQueue");
  sampleQueueProducer("SampleJob", {
    name: "Logesh",
    company: "Searce",
    position: "SDE-1",
    location: "BLR"
  });
});