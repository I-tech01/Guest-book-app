import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// middleware
app.use(cors({
  origin: ['http://127.0.0.1', 'http://localhost']
}));
app.use(express.json());

// in-memory storage
let entries = [];

// routes
app.get("/entries", (req, res) => {
  res.json(entries);
});

app.post("/entries", (req, res) => {
  const { name, message } = req.body;
  entries.push({ name, message });
  res.json(entries);
});

// start server (THIS MUST BE OUTSIDE ALL ROUTES)
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
