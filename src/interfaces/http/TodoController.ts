import { Request, Response } from "express";
import { CreateTodo } from "../../application/usecases/CreateTodo";
import { ListTodos } from "../../application/usecases/ListTodos";
import { CompleteTodo } from "../../application/usecases/CompleteTodo";
import { GetTodo } from "../../application/usecases/GetTodo";



export class TodoController {
  constructor(
    private createTodo: CreateTodo,
    private listTodos: ListTodos,
    private completeTodo: CompleteTodo,
    private getTodo: GetTodo
  ) {}

  create = async (req: Request, res: Response) => {
    try {
      const todo = await this.createTodo.execute(req.body.title);
      res.status(201).json(todo);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };

  list = async (_req: Request, res: Response) => {
    const todos = await this.listTodos.execute();
    return res.json(todos);
  };

  markCompleted = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      await this.completeTodo.execute(id);
      res.status(204).send();
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };

  todo = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const todo = await this.getTodo.execute(id);
    
    return res.json(todo);
  };
}
