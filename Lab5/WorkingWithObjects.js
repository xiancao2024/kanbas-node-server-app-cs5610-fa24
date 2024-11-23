const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};

export default function WorkingWithObjects(app) {
  // Route to get assignment details
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });

  // Route to get assignment title
  app.get("/lab5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });

  // Route to update the title using GET
  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });

  // Route to update the score using GET
  app.get("/lab5/assignment/score/:Newscore", (req, res) => {
    const { Newscore } = req.params;
    assignment.score = parseInt(Newscore);
    res.json(assignment);
  });

  // Route to update the completed status using GET
  app.get("/lab5/assignment/completed/:completed", (req, res) => {
    const { completed } = req.params;
    assignment.completed = completed === "true";
    res.json(assignment);
  });


}

