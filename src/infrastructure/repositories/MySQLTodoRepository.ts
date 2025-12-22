import { TodoRepository } from "../../application/ports/TodoRepository";
import { Todo } from "../../domain/Todo";
import { pool } from "../db/mysql";

export class MySQLTodoRepository implements TodoRepository {

  async save(todo: Todo): Promise<Todo> {
    const [result]: any = await pool.query(
      `INSERT INTO todos (title, completed, created_at)
       VALUES (?, ?, ?)`,
      [todo.title, todo.completed, todo.createdAt]
    );

    return new Todo(
      result.insertId,
      todo.title,
      todo.completed,
      todo.createdAt
    );
  }

  async findAll(): Promise<Todo[]> {
    const [rows]: any = await pool.query(
      `SELECT * FROM todos ORDER BY created_at DESC`
    );

    return rows.map(
      (row: any) =>
        new Todo(
          row.id,
          row.title,
          !!row.completed,
          new Date(row.created_at)
        )
    );
  }

   async findById(id: number): Promise<Todo | null> {
    const [rows]: any = await pool.query(
      `SELECT * FROM todos WHERE id = ? LIMIT 1`,
      [id]
    );

    if (rows.length === 0) return null;

    const row = rows[0];
    return new Todo(
      row.id,
      row.title,
      !!row.completed,
      new Date(row.created_at)
    );
  }

  async update(todo: Todo): Promise<void> {
    await pool.query(
      `UPDATE todos SET completed = ? WHERE id = ?`,
      [todo.completed, todo.id]
    );
  }
}
