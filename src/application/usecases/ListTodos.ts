import { Todo } from "../../domain/Todo";
import { TodoRepository  } from "../ports/TodoRepository";

export class ListTodos {
    constructor(private todoRepo: TodoRepository){}

    async execute(): Promise<Todo[]>{
        return this.todoRepo.findAll();
    }
}