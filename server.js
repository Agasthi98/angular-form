import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.post("/api/login", (req, res) => {
  console.log(req.body);
  res.redirect("http://localhost:4200/form");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
