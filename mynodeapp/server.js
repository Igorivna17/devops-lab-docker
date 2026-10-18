const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello from my custom Node.js Docker image!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h2>This is a simple Express app running in Docker</h2>");
});

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});
