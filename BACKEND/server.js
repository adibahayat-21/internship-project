const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 in-memory storage (fast)
let contentData = {
  name: "I'm Jenny",
  introText: "Lorem ipsum...",
  shortMsg: "Lorem ipsum..."
};

// ✅ GET API
app.get("/api/content", (req, res) => {
  res.json(contentData);
});

// ✅ POST API
app.post("/api/content", (req, res) => {
  contentData = req.body;
  res.json({
    message: "Content updated successfully",
    data: contentData
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});