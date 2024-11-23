const module = {
  id: "CS5610",
  name: "Full Stack Web Development",
  description:
    "An in-depth course on web development using modern tools and technologies.",
  course: "CS5610 - Full Stack Web Dev",
};

export default function WorkingWithModule(app) {
  // Route to get the full module object
  app.get("/lab5/module", (req, res) => {
    res.json(module);
  });
  app.get("/lab5/module/name", (req, res) => {
    res.json(module.name);
  });
  app.get("/lab5/module/name/:newName", (req, res) => {
    const { newName } = req.params;
    module.name = newName;
    res.json(module);
  });
  
  // Route to update the description
  app.get("/lab5/module/description/:newDescription", (req, res) => {
    const { newDescription } = req.params;
    module.description = newDescription;
    res.json(module);
  });
}
 