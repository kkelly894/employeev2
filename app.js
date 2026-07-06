import express from "express";
import employeeRouter from "./api/employees.js";

const app = express();
export default app;

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello employees!");
});

app.use("/employees", employeeRouter);

app.use((error, request, response, next) => {
  console.error(error);
  response.sendStatus(500);
});
