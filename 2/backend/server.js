import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

// get a list of 5 jokes a list with multiple dictionaries each containing id title and content
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Joke 1",
      content: "Why did the chicken cross the road? To get to the other side!",
    },
    {
      id: 2,
      title: "Joke 2",
      content: "What do you call fake spaghetti? An impasta!",
    },
    {
      id: 3,
      title: "Joke 3",
      content:
        "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 4,
      title: "Joke 4",
      content: "What do you call cheese that isn't yours? Nacho cheese!",
    },
    {
      id: 5,
      title: "Joke 5",
      content:
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
  ];
  res.json(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
