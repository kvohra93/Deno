import { v4 } from "http://deno.land/std/uuid/mod.ts";
import { Employee } from "../models/employee.ts";
let employees: Employee[] = [
  {
    id: "1",
    name: "Dave Ramsey",
    designation: "Accountant",
    age: 32,
  },
  {
    id: "2",
    name: "Robbie Smith",
    designation: "HR Manager",
    age: 28,
  },
  {
    id: "3",
    name: "Mark Belman",
    designation: "Foreman",
    age: 40,
  }, {
    id: "4",
    name: "Hank Moody",
    designation: "Quality Control",
    age: 39,
  },
  {
    id: "4",
    name: "Dwayne Jefferson",
    designation: "Delivery Executive",
    age: 38,
  },
];

// @desc Get Employee
// @route Get /api/employees
const getEmployees = async (request: any, response: any) => {
  await response.json({
    error: false,
    data: employees,
  });
};

export { getEmployees};