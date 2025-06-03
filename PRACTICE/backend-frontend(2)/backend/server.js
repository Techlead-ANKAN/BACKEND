import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors()); // 🔥 This line enables CORS for all origins

app.get("/", (req, res) => {
  const details = {
    name: "Ankan Maity",
    age: 22,
    email: "mr.ankanmaity@gmail.com",
    role: "Full Stack Developer",
  };
  res.json(details);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
