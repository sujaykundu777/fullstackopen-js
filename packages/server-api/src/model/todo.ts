import mongoose from 'mongoose';

interface ITodo {
  title: string;
  description: string;
  status: boolean;
}

interface TodoModelInterface extends mongoose.Model<TodoDoc> {
  build(attr: ITodo): TodoDoc;
}

interface TodoDoc extends mongoose.Document {
  title: string;
  description: string;
  status: boolean;
}

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});

// builder to create a new instance of Todo
todoSchema.statics.build = (attr: ITodo) => {
  return new Todo(attr);
};

const Todo = mongoose.model<any, TodoModelInterface>('Todo', todoSchema);

export { Todo };
