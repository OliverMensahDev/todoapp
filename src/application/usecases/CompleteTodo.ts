import { Todo } from '../../domain/Todo';
import { TodoRepository } from '../ports/TodoRepository';

export class CompleteTodo{
  constructor(private todoRepo: TodoRepository) {}

  async execute(todoId: number): Promise<void> {
    const todo = await this.todoRepo.findById(todoId);

    if (!todo) {
      throw new Error("Todo not found");
    }

    todo.markedCompleted(); // domain logic

    await this.todoRepo.update(todo);
  }
}