# 🎓 Student Management System

A full-stack CRUD application to manage students and their subject marks, built with:

- 💻 **Frontend**: React.js + Bootstrap + Axios + SweetAlert2
- ⚙️ **Backend**: Node.js + Express.js + PostgreSQL

---

## ✨ Features

✅ Add, view, update, and delete students  
✅ Add multiple marks per student  
✅ View all student details in a Bootstrap table  
✅ Modal dialog for creating and editing students  
✅ SweetAlert confirmation and success alerts  
✅ Fully responsive design using React-Bootstrap

---

## 🗂 Project Structure

```
project-root/
├── backend/         # Node.js + Express API
│   ├── app.js
│   ├── .env
│   ├── schema.sql
│   └── ...
├── frontend/        # React.js frontend
│   ├── src/
│   │   ├── components/
│   │   └── App.js
│   └── ...
```

---

## 🚀 Getting Started

### 🧱 1. Clone the Project

```bash
git clone https://github.com/rajeevranjanpan/student-management-system.git
cd student-management-system
```

---

### ⚙️ 2. Setup Backend (Node.js + PostgreSQL)

```bash
cd backend
npm install
```

#### Configure `.env`

```env
PORT=5000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=studentdb
DB_PASS=your_password
DB_PORT=5432
```

#### Create Database and Tables

```bash
psql -U postgres
CREATE DATABASE studentdb;
\q
psql -U postgres -d studentdb -f schema.sql
```

#### Start Backend

```bash
node app.js
```

API runs at: `http://localhost:5000/api/students`

---

### 💻 3. Setup Frontend (React.js)

```bash
cd ../frontend
npm install
npm start
```

App runs at: `http://localhost:3000`

---

## 📡 API Endpoints

| Method | Endpoint                 | Description                  |
|--------|--------------------------|------------------------------|
| GET    | `/api/students`         | Get paginated students list |
| GET    | `/api/students/:id`     | Get a student with marks     |
| POST   | `/api/students`         | Create a student + marks     |
| PUT    | `/api/students/:id`     | Update a student             |
| DELETE | `/api/students/:id`     | Delete a student             |

---

## 🧠 Technologies Used

| Layer     | Tools & Packages                          |
|-----------|-------------------------------------------|
| Frontend  | React, Axios, React-Bootstrap, SweetAlert2 |
| Backend   | Node.js, Express.js, pg (PostgreSQL)      |
| Database  | PostgreSQL                                |

---

## 📷 Screenshots

<img width="1919" height="562" alt="image" src="https://github.com/user-attachments/assets/e2325847-695d-4364-870c-512b6a8197df" />


---

## 🤝 Author

Made with ❤️ by **[Your Name]**

---

## 📄 License

This project is licensed under the MIT License.
