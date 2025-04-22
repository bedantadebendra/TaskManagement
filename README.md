# 📝 Task Manager App

A simple full-stack Task Manager application built with **React** (frontend), **Node.js + Express** (backend), and a lightweight **JSON file** as the database.

---

## 🚀 Features

- ✅ View all tasks in a table
- ➕ Add new tasks
- ✅ Mark tasks as complete/incomplete
- ❌ Delete tasks
- 💅 Clean UI using plain CSS

---

## 📦 Tech Stack

- **Frontend:** React (Hooks, React Router)
- **Backend:** Node.js, Express
- **Database:** JSON file (`lowdb`)
- **Styling:** Plain CSS (no framework)

---

## 📁 Folder Structure

Task_Manager_app/ │ ├── backend/ # Express server │ ├── db.json # Task data │ ├── index.js # Server code │ └── package.json # Backend dependencies │ ├── frontend/ │ └── task_manager_frontend/ │ ├── public/ │ ├── src/ │ │ ├── components/ # TaskList, TaskItem │ │ ├── App.js │ │ ├── index.js │ │ └── index.css │ └── package.json # Frontend dependencies │ └── README.md

yaml
Copy
Edit

---

## ⚙️ How to Run This Project

### 🔽 Step 1: Clone the Repo

```bash
git clone https://github.com/bedantadebendra/TaskManagement.git
cd TaskManagement
▶️ Step 2: Start the Backend
bash
Copy
Edit
cd backend
npm install
node index.js
Runs on http://localhost:5000

💻 Step 3: Start the Frontend
bash
Copy
Edit
cd ../frontend/task_manager_frontend
npm install
npm start
Runs on http://localhost:3000

📝 Notes
The backend uses lowdb for a lightweight, file-based JSON database.

API endpoints are under http://localhost:5000/tasks

CORS is enabled to allow frontend-backend communication.

🧑‍💻 Author
Debendra Kumar Bedanta
