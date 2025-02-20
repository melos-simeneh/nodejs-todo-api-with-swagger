let todos = [];

const getAllTodos = (req, res) => {
  res.json(todos);
};

const getTodoById = (req, res) => {
  const todo = todos.find((todo) => todo.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.json(todo);
};

const createTodo = (req, res) => {
  const { title, description } = req.body;
  const newTodo = {
    id: todos.length + 1,
    title,
    description,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

const updateTodo = (req, res) => {
  const todo = todos.find((todo) => todo.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  const { title, description, completed } = req.body;
  todo.title = title || todo.title;
  todo.description = description || todo.description;
  todo.completed = completed !== undefined ? completed : todo.completed;
  res.json(todo);
};

const deleteTodo = (req, res) => {
  const todoIndex = todos.findIndex(
    (todo) => todo.id === parseInt(req.params.id)
  );
  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }
  todos.splice(todoIndex, 1);
  res.status(200).send({
    message: `Todo with id ${req.params.id} deleted.`,
  });
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
