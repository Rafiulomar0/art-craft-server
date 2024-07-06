const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Art and craft");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
