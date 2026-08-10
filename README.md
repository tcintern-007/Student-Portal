# 🎓 Student Course Portal

A modern, responsive, and scalable **Student Course Portal** built with **Next.js App Router**, **Tailwind CSS**, and a separate **Express.js** backend. This project demonstrates a complete full-stack application flow with REST APIs, CORS, environment variables, and client-server communication.

## 🚀 Live Demo

🌐 https://student-portal.adeelkhan.online/

---

## 📸 Preview

> Add screenshots or a GIF of your application here.

---

## ✨ Features

* 🏠 Responsive Home Page
* 📚 Dynamic Courses Page (fetched from Express API)
* 👨‍🏫 Dynamic Instructors Page
* 📖 Dynamic Course Details Page
* ⏳ Loading States
* ❌ Error Handling with Retry Option
* ➕ Add New Course Form (via API)
* 🧩 Reusable Components
* 🔄 File-Based Routing
* 🎯 Dynamic Routes (`[slug]`)
* 📱 Fully Responsive Design

---

## 🛠️ Tech Stack

### Frontend

* **Next.js (App Router)**
* **React**
* **JavaScript (ES6+)**
* **Tailwind CSS**
* **Lucide React**

### Backend

* **Node.js**
* **Express.js**
* **CORS**
* **dotenv**

---

## 📁 Project Structure

```text
student-course-portal/
│
├── frontend/                    (Existing Next.js app)
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── globals.css
│   │   ├── not-found.js
│   │   ├── contact/
│   │   │   └── page.js
│   │   ├── courses/
│   │   │   ├── page.js
│   │   │   └── [slug]/
│   │   │       └── page.js
│   │   └── instructors/
│   │       └── page.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── CourseCard.jsx
│   │   ├── InstructorCard.jsx
│   │   ├── CourseForm.jsx
│   │   └── SectionTitle.jsx
│   ├── lib/
│   │   └── api.js
│   ├── data/
│   │   ├── courses.js
│   │   └── instructors.js
│   ├── package.json
│   ├── .env.local
│   └── .env.example
│
├── backend/                     (New Express backend)
│   ├── controllers/
│   │   └── courseController.js
│   ├── routes/
│   │   └── courseRoutes.js
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   └── validateCourse.js
│   ├── data/
│   │   └── courses.js
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .env.example
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### Prerequisites

* Node.js (v18 or higher)
* npm or yarn

### Clone the repository

```bash
git clone https://github.com/your-username/student-course-portal.git
cd student-course-portal
```

### Install Frontend Dependencies

```bash
cd frontend
npm install
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

---

## 🚀 Running Locally

### Start the Backend Server

```bash
cd backend
npm run dev
```

The backend will run on **http://localhost:5000**

### Start the Frontend Development Server

Open a new terminal window:

```bash
cd frontend
npm run dev
```

The frontend will run on **http://localhost:3000**

---

## 🔌 API Endpoints

Base URL: `http://localhost:5000/api/courses`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/courses` | Get all courses |
| GET | `/api/courses/:id` | Get a single course by ID |
| POST | `/api/courses` | Create a new course |
| PUT | `/api/courses/:id` | Update an existing course |
| DELETE | `/api/courses/:id` | Delete a course |

### Example Requests

**GET all courses**

```bash
curl http://localhost:5000/api/courses
```

**GET one course**

```bash
curl http://localhost:5000/api/courses/1
```

**POST a new course**

```bash
curl -X POST http://localhost:5000/api/courses \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Node.js",
    "instructor": "Jane Smith",
    "description": "Learn Node.js and Express.",
    "duration": "6 weeks"
  }'
```

**PUT update a course**

```bash
curl -X PUT http://localhost:5000/api/courses/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Course Title",
    "instructor": "John Doe",
    "description": "Updated description.",
    "duration": "10 weeks"
  }'
```

**DELETE a course**

```bash
curl -X DELETE http://localhost:5000/api/courses/1
```

---

## 🔐 Environment Variables

### Frontend

Create `.env.local` in the `frontend` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Create `.env.example` in the `frontend` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Backend

Create `.env` in the `backend` directory:

```env
PORT=5000
FRONTEND_URL=http://localhost:3000
```

Create `.env.example` in the `backend` directory:

```env
PORT=5000
FRONTEND_URL=http://localhost:3000
```

> **Note:** `.env` files are not committed to Git. Only `.env.example` is committed.

---

## 🧪 Testing with Postman

Test every API endpoint using Postman:

1. **GET /api/courses** - Should return 200 OK with all courses
2. **GET /api/courses/1** - Should return 200 OK with course data
3. **GET /api/courses/9999** - Should return 404 Not Found
4. **POST /api/courses** - Should return 201 Created with new course
5. **POST /api/courses** (missing fields) - Should return 400 Bad Request
6. **PUT /api/courses/1** - Should return 200 OK with updated course
7. **PUT /api/courses/9999** - Should return 404 Not Found
8. **DELETE /api/courses/1** - Should return 200 OK
9. **DELETE /api/courses/9999** - Should return 404 Not Found

---

## 📚 Learning Concepts

This project demonstrates:

### Backend

* **Express.js** - Web framework for Node.js
* **REST API Design** - GET, POST, PUT, DELETE endpoints
* **Controllers** - Handle business logic for each route
* **Routes** - Define API endpoints and map them to controllers
* **Middleware** - Request validation and centralized error handling
* **CORS** - Allow cross-origin requests from Next.js frontend
* **Environment Variables** - Configure port and frontend URL via `.env`
* **In-Memory Data** - Store courses in an array (no database)

### Frontend

* **Next.js App Router** - File-based routing with Server and Client Components
* **Client-Side Data Fetching** - Use `useEffect` to call Express API
* **Loading States** - Show loading indicators while fetching data
* **Error Handling** - Display user-friendly error messages with retry option
* **Reusable API Helper** - `lib/api.js` for all API calls
* **Environment Variables** - Use `NEXT_PUBLIC_API_URL` for API base URL
* **Form Handling** - Create new courses via POST request

### Architecture

```
                    USER
                      │
                      ▼
              NEXT.JS FRONTEND
                      │
                 fetch()
                      │
                      ▼
              EXPRESS BACKEND
                      │
              ┌───────┴───────┐
              │               │
           Routes         Middleware
              │               │
              ▼               │
          Controllers          │
              │               │
              ▼               │
       In-Memory Array         │
              │               │
              └───────┬───────┘
                      │
                  JSON Response
                      │
                      ▼
              NEXT.JS FRONTEND
                      │
                      ▼
                     UI
```

---

## 🌐 Dynamic Routes

Example routes:

```text
/courses/react-fundamentals
/courses/nextjs-mastery
/courses/tailwind-css-pro
```

Each route is handled by:

```text
app/courses/[slug]/page.js
```

---

## 🎯 Learning Objectives

This project was built to practice:

* Next.js App Router
* Server vs Client Components
* File-Based Routing
* Dynamic Routes
* Component Reusability
* Express.js REST API
* Controllers, Routes, and Middleware
* CORS Configuration
* Request Validation
* Centralized Error Handling
* HTTP Status Codes
* Environment Variables
* Client-Side API Calls
* Loading and Error States

---

## 📌 Future Improvements

* User Authentication
* Database Support (MongoDB/PostgreSQL)
* Course Enrollment
* Student Dashboard
* Instructor Dashboard
* Admin Panel
* Pagination
* Course Categories & Filters
* Edit and Delete Course (Bonus)
* Search and Filter Courses

---

## 👨‍💻 Author

**Muhammad Adeel**

* GitHub: https://github.com/MuhammadAdeel0072

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!
