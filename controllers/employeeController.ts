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
  },
];

// @desc Get Products
// @route Get /api/products
const getEmployees = async (request: any, response: any) => {
  await response.json({
    error: false,
    data: employees,
  });
};

// @desc Get Single Employee
// @route Get /api/employee/:id
const getEmployee = async (request: any, response: any) => {
  //console.log(request.params);
  const employee: Employee | undefined = employees.find(
    (p) => p.id === request.params.id
  );
  if (employee) {
    await response.json({
      error: false,
      data: employee,
    });
  } else {
    response.status = 404;
    await response.json({
      error: true,
      message: "No product found",
    });
  }
};

// @desc Add product
// @route Post /api/products
const addEmployee = async (request: any, response: any) => {
  //   console.log(await request.data);
  if (!request.data) {
    response.status = 400;
    response.json({
      error: true,
      message: "No data",
    });
  } else {
    const employee: Employee = await request.data;
    employee.id = v4.generate();
    employees.push(employee);
    response.json({
      error: false,
      data: employee,
    });
  }
};

// @desc Update Product
// @route PUT /api/products/:id
const updateEmployee = async (request: any, response: any) => {
  const id_param = await request.params.id;
  const data = await request.data;
  const employee: Employee | undefined = employees.find((p) => p.id === id_param);

  if (employee) {
    const updateData: {
      name?: string;
      designation?: string;
      age?: number;
    } = data;

    employees = employees.map((p) =>
      p.id === id_param ? { ...p, ...updateData } : p
    );

    response.json({
      error: false,
      data: employees,
    });
  } else {
    response.status = 400;
    response.json({
      error: true,
      message: "No data",
    });
  }
};

// @desc Delete Product
// @route DELETE /api/product/:id
const deleteEmployee = async (request: any, response: any) => {
  const id_param = await request.params.id;
  employees = employees.filter((p) => p.id !== id_param);
  response.json({
    error: false,
    message: "Product Deleted",
    data: employees,
  });
};

export { getEmployees, getEmployee, addEmployee, updateEmployee, deleteEmployee };