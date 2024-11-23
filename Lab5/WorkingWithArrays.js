// Initial todos array with some predefined tasks
let todos = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
  { id: 3, title: "Task 3", completed: false },
  { id: 4, title: "Task 4", completed: true },
];

// Function to handle routes related to todos
export default function WorkingWithArrays(app) {
  
  // Get all todos or filter by completion status
  app.get("/lab5/todos", (req, res) => {
      const { completed } = req.query;

      // If completed query param is provided, filter todos
      if (completed !== undefined) {
          const completedBool = completed === "true"; // Convert to boolean
          const completedTodos = todos.filter(
              (t) => t.completed === completedBool
          );
          res.json(completedTodos); // Respond with filtered todos
          return;
      }

      // Otherwise, return all todos
      res.json(todos);
  });

  // Create a new todo with default values
  app.get("/lab5/todos/create", (req, res) => {
      const newTodo = {
          id: new Date().getTime(), // Unique ID based on timestamp
          title: "New Task",
          completed: false,
      };
      todos.push(newTodo); // Add to todos array
      res.json(todos); // Respond with updated todos array
  });

  // Create a new todo with data from the request body
  app.post("/lab5/todos", (req, res) => {
      const newTodo = { ...req.body, id: new Date().getTime() }; // Add unique ID
      todos.push(newTodo); // Add to todos array
      res.json(newTodo); // Respond with the newly created todo
  });

  // Get a specific todo by ID
  app.get("/lab5/todos/:id", (req, res) => {
      const { id } = req.params;
      const todo = todos.find((t) => t.id === parseInt(id)); // Find todo by ID
      res.json(todo); // Respond with the found todo
  });

  // Delete a specific todo by ID using a GET request (not recommended)
  app.get("/lab5/todos/:id/delete", (req, res) => {
      const { id } = req.params;
      const todo = todos.find((t) => t.id === parseInt(id)); // Find todo by ID
      const todoIndex = todos.indexOf(todo);
      if (todoIndex !== -1) {
          todos.splice(todoIndex, 1); // Remove the todo from the array
      }
      res.json(todos); // Respond with updated todos array
  });

  // Delete a specific todo by ID using a DELETE request
  app.delete("/lab5/todos/:id", (req, res) => {
      const { id } = req.params;
      const todoIndex = todos.findIndex((t) => t.id === parseInt(id)); // Find todo index by ID
      if (todoIndex === -1) {
          // If todo not found, respond with 404
          res.status(404).json({ message: `Unable to delete Todo with ID ${id}` });
          return;
      }
      todos.splice(todoIndex, 1); // Remove the todo from the array
      res.sendStatus(200); // Respond with success
  });

  // Update a specific todo by ID using a PUT request
  app.put("/lab5/todos/:id", (req, res) => {
      const { id } = req.params;
      const todoIndex = todos.findIndex((t) => t.id === parseInt(id)); // Find todo index by ID
      if (todoIndex === -1) {
          // If todo not found, respond with 404
          res.status(404).json({ message: `Unable to update Todo with ID ${id}` });
          return;
      }

      // Update the matching todo with data from the request body
      todos = todos.map((t) => {
          if (t.id === parseInt(id)) {
              return { ...t, ...req.body };
          }
          return t;
      });
      res.sendStatus(200); // Respond with success
  });

  // Update the "completed" status of a specific todo by ID
  app.get("/lab5/todos/:id/completed/:completed", (req, res) => {
      const { id, completed } = req.params;
      const todo = todos.find((t) => t.id === parseInt(id)); // Find todo by ID
      if (!todo) {
          // If todo not found, respond with 404
          res.status(404).json({ message: `Todo with ID ${id} not found` });
          return;
      }
      todo.completed = completed === "true"; // Convert string to boolean
      res.json(todos); // Respond with updated todos array
  });

  // Update the "description" of a specific todo by ID
  app.get("/lab5/todos/:id/description/:description", (req, res) => {
      const { id, description } = req.params;
      const todo = todos.find((t) => t.id === parseInt(id)); // Find todo by ID
      if (!todo) {
          // If todo not found, respond with 404
          res.status(404).json({ message: `Todo with ID ${id} not found` });
          return;
      }
      todo.description = description; // Update the description
      res.json(todos); // Respond with updated todos array
  });
}
