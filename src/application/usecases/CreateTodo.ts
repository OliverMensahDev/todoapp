import { Todo } from '../../domain/Todo';
import { TodoRepository } from '../ports/TodoRepository';

export class CreateTodo {
    constructor(private todoRepo: TodoRepository){}

    async execute(title: string): Promise<Todo> {
        if(!title || title.trim() === ""){
            throw new Error("Todo title cannot be empty")
        }
        const todo = new Todo(
            null,
            title, 
            false, 
            new Date()
        )

        return await this.todoRepo.save(todo)
    }
}