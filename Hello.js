function HelloRoutes(app) {
  app.get("/hello", (req, res) => {
    res.send("Life is good for me !");
  });
  app.get("/", (req, res) => {
    res.send("Welcome to Full Stack Development!");
  });
}
export default HelloRoutes; // Correct default export