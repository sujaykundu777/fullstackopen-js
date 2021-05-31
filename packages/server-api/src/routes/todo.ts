import { Router } from 'express';
import { addTodo, deleteTodo, getSingleTodo, getTodos, updateTodo } from '../controllers/todos';

const router: Router = Router();

router.get('/api/v1/todos', getTodos);

router.get('/api/v1/todos/:id', getSingleTodo);

router.post('/api/v1/todos', addTodo);

router.put('/api/v1/edit-todo/:id', updateTodo);

router.delete('/api/v1/delete-todo/:id', deleteTodo);

export default router;
