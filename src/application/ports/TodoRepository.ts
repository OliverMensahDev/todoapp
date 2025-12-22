import { Todo } from '../../domain/Todo';

export interface TodoRepository {
  save(todo: Todo): Promise<Todo>;
  findAll(): Promise<Todo[]>;
  findById(id: number): Promise<Todo | null>;
  update(todo: Todo): Promise<void>;
}