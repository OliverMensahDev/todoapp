import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";

import { MySQLTodoRepository } from "./infrastructure/repositories/MySQLTodoRepository";
import { CreateTodo } from "./application/usecases/CreateTodo";
import { ListTodos } from "./application/usecases/ListTodos";
import { CompleteTodo } from "./application/usecases/CompleteTodo";
import { GetTodo } from "./application/usecases/GetTodo";


import { TodoController } from "./interfaces/http/TodoController";

const app = express();
app.use(bodyParser.json());

// wiring
const todoRepo = new MySQLTodoRepository();
const createTodo = new CreateTodo(todoRepo);
const listTodos = new ListTodos(todoRepo);
const completeTodo = new CompleteTodo(todoRepo);
const getTodo = new GetTodo(todoRepo)

const todoController = new TodoController(createTodo, listTodos, completeTodo, getTodo);

// routes
app.post("/todos", todoController.create);
app.get("/todos", todoController.list);
app.get("/todos/:id", todoController.todo);
app.patch("/todos/:id/complete", todoController.markCompleted);


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
