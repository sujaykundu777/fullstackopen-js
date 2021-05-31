import { Request, Response } from 'express';
import { Todo } from '../../model/todo';

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({ todos });
  } catch (err) {
    throw err;
  }
};

const getSingleTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const singleTodo = await Todo.find({ _id: id });
    res.status(200).json({ singleTodo });
  } catch (err) {
    throw err;
  }
};

const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, status } = req.body;
    const todo = Todo.build({ title, description, status });
    const newTodo = await todo.save();
    res.status(201).json({ message: 'Todo Added', todo: newTodo });
  } catch (err) {
    throw err;
  }
};

const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const body = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate({ _id: id }, body);
    const allTodos = await Todo.find();
    res.status(200).json({ message: 'Todo updated', todo: updatedTodo, todos: allTodos });
  } catch (err) {
    throw err;
  }
};

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const deletedTodo = await Todo.findByIdAndRemove({ _id: id });
    const allTodos = await Todo.find();
    res.status(200).json({ message: 'Todo deleted', todo: deletedTodo, todos: allTodos });
  } catch (err) {
    throw err;
  }
};

export { getTodos, getSingleTodo, addTodo, updateTodo, deleteTodo };
