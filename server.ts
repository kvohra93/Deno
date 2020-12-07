import * as expressive from "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts";
import {
  getEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "./controllers/employeeController.ts";

(async () => {
  const port = 3000;
  const app = new expressive.App();
  app.use(expressive.simpleLog());
  // app.use(expressive.static_("./public"));
  app.use(expressive.bodyParser.json());

  app.get("/api/employees", getEmployees);
  app.get("/api/employees/{id}", getEmployee);
  app.post("/api/employees", addEmployee);
  app.put("/api/employees/{id}", updateEmployee);
  app.delete("/api/employees/{id}", deleteEmployee);

  const server = await app.listen(port);
  console.log("app listening on port " + server.port);
})();