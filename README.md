📘 Guest Book App
A simple full‑stack guestbook application that demonstrates how the frontend and backend communicate in a real project.
Users can submit their name and message, which are sent to the backend, stored in memory, and immediately displayed on the frontend.

🚀 Features
📝 Submit a guestbook entry (name + message)

🔄 Automatically fetch and display all entries

🌐 Express.js backend with REST API

🔁 Real‑time updates after each submission

🧩 Simple, clean vanilla JavaScript frontend

🔓 CORS enabled for cross‑origin requests

🗂 In‑memory storage (no database required)

🏗 Project Structure
Guest-book-app/
│
├── server.js          # Express backend server
├── package.json       # Dependencies and scripts
│
└── frontEnd/
    ├── index.html     # UI layout
    ├── index.css      # Styling
    └── index.js       # Frontend logic (fetch + DOM updates)
⚙️ Backend API
GET /entries
Returns all guestbook entries.

Response example:
[
  { "name": "Isaac", "message": "Hello world!" }
]
POST /entries
Adds a new entry.

Request body:

{
  "name": "Isaac",
  "message": "This is my message"
}
▶️ How to Run the Project
1. Install dependencies
   npm install
2. Start the backend
   npm start
Backend runs at:
http://localhost:3000
3. Open the frontend
Open the index.html file in your browser, or serve it using any static server.

🧠 What This Project Teaches
How to build a simple REST API with Express

How to send JSON data from frontend to backend

How to fetch and display data dynamically

How CORS works in a real project

How client–server communication actually happens

📌 Future Improvements
Save entries to a JSON file or database

Add timestamps

Add delete/edit functionality

Add better UI styling

Deploy backend + frontend online
