import { Todo } from "../../domain/Todo";
import { TodoRepository  } from "../ports/TodoRepository";

export class GetTodo {
    constructor(private todoRepo: TodoRepository){}

     async execute(todoId: number): Promise<Todo> {
        const todo = await this.todoRepo.findById(todoId);

        if (!todo) {
            throw new Error("Todo not found");
        }
        return todo;
    }
}