import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static("public"));

let entries = [];

app.get("/entries", (req, res) => {
  res.json(entries);
});

app.post("/entries", (req, res) => {
  const { name, message } = req.body;
  entries.push({ name, message });
  res.json(entries);
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
