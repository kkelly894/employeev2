import express from "express";
const router = express.Router();
export default router;

import {
  getEmployee,
  getEmployees,
  getRandomEmployee,
  addEmployee,
} from "#db/employees";

router.get("/", (request, response) => {
  const employees = getEmployees();
  response.send(employees);
});

router.get("/random", (request, response) => {
  const employee = getRandomEmployee();
  response.send(employee);
});

router.get("/:id", (request, response) => {
  const { id } = request.params;
  const employee = getEmployee(+id);
  if (!employee) {
    return response.status(404).send(`Employee #${id} not found.`);
  }
  response.send(employee);
});

router.post("/", (request, response) => {
  const employee = request.body;
  if (!employee || !employee.name) {
    return response.sendStatus(400);
  }
  const newEmployee = addEmployee(employee.name);
  response.status(201).send(newEmployee);
});
