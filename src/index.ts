import express from "express";

import routes from "./routes";

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: false }))

app.use("/health", routes.health);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
