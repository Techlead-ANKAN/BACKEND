// Import the Express.js framework, a popular Node.js web framework
const express = require("express");

require("dotenv").config();

const app = express(); // Create a new instance of the Express.js app

// Define a route for the root URL ("/") using the HTTP GET method
app.get("/", (req, res) => {
  res.send("Hello World!"); // Send a response with the string "Hello World!" when the root URL is accessed
});

// ----------------------------- My Works -------------------------------------

const github_data = {
  "login": "Techlead-ANKAN",
  "id": 97699244,
  "node_id": "U_kgDOBdLFrA",
  "avatar_url": "https://avatars.githubusercontent.com/u/97699244?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Techlead-ANKAN",
  "html_url": "https://github.com/Techlead-ANKAN",
  "followers_url": "https://api.github.com/users/Techlead-ANKAN/followers",
  "following_url": "https://api.github.com/users/Techlead-ANKAN/following{/other_user}",
  "gists_url": "https://api.github.com/users/Techlead-ANKAN/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Techlead-ANKAN/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Techlead-ANKAN/subscriptions",
  "organizations_url": "https://api.github.com/users/Techlead-ANKAN/orgs",
  "repos_url": "https://api.github.com/users/Techlead-ANKAN/repos",
  "events_url": "https://api.github.com/users/Techlead-ANKAN/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Techlead-ANKAN/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "ANKAN MAITY",
  "company": "Workday",
  "blog": "https://portfolio-ankan.vercel.app/",
  "location": "14/1, Verner Lane, Belgharia, Kolkata - 700056, India. ",
  "email": null,
  "hireable": true,
  "bio": "👋 Hi, I'm Ankan Maity! Web dev with HTML/CSS/JS. Skilled in Java, Python, C, and DSA. Aspiring MERN Full Stack Dev. Always learning & building! 🚀",
  "twitter_username": null,
  "public_repos": 41,
  "public_gists": 0,
  "followers": 4,
  "following": 1,
  "created_at": "2022-01-13T19:17:36Z",
  "updated_at": "2025-05-25T11:47:50Z"
}

app.get("/twitter", (req, res) => {
  res.send("Twitter API");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Page</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Youtube Page</h2>");
});

app.get("/githubdata", (req, res) => {
  res.json(github_data)
})
// -----------------------------------------------------------------------------

// Start the app listening on the specified port
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`); // Log a message to the console indicating that the app is listening on the specified port
});
