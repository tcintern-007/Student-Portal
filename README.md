# 🎓 Student Course Portal

A modern, responsive, and scalable **full-stack Student Course Portal** built with **Next.js App Router**, **Tailwind CSS**, **Express.js**, **PostgreSQL (Neon)**, and **JWT Authentication & Authorization**.

The project demonstrates a production-style full-stack application with authentication, role-based access control, ownership-based authorization, protected CRUD operations, request validation, centralized error handling, REST APIs, and client-server communication.

## 🚀 Live Demo

🌐 https://student-portal.adeelkhan.online/

---

## 📸 Preview

> Add screenshots or a GIF of your application here.

---

## ✨ Features

### 🎓 Student Features

* 🏠 Responsive Home Page
* 📚 Browse available courses
* 🔎 Search and filter courses
* 📖 Dynamic Course Details Page
* 👨‍🏫 Dynamic Instructors Page
* 🔐 User Registration and Login
* 👤 Authenticated User Profile
* 🎯 Role-based access control
* 🔒 Protected routes
* ⏳ Loading states
* ❌ Error handling with retry options
* 📱 Fully responsive UI

### 🛡️ Authentication & Authorization

* 🔐 JWT-based authentication
* 🔑 Password hashing with bcrypt
* 👥 User roles:

  * `admin`
  * `user`
* 🛡️ Role-Based Access Control (RBAC)
* 🔒 Protected CRUD operations
* 👑 Admin-only course management
* 👤 Ownership-based authorization
* 🚫 Unauthorized users cannot modify protected resources
* ⚠️ Proper `401 Unauthorized` and `403 Forbidden` responses
* 🔐 Authentication middleware
* 🧩 Authorization middleware
* 🔒 Protected frontend actions based on user permissions

### 📚 Course Management

* ➕ Create courses
* 📖 Read courses
* ✏️ Update courses
* 🗑️ Delete courses
* 🔐 Protected course operations
* 👑 Admin authorization
* 👤 Ownership checks
* 🔎 Course search and filtering
* 📄 Pagination support

### ⚙️ Backend

* RESTful API architecture
* Express.js controllers and routes
* PostgreSQL database
* Neon serverless PostgreSQL
* JWT authentication
* Password hashing
* Role-based authorization
* Ownership authorization
* Request validation
* Centralized error handling
* CORS configuration
* Environment variable configuration
* Proper HTTP status codes

---

# 🛠️ Tech Stack

## Frontend

* **Next.js** — App Router
* **React**
* **JavaScript (ES6+)**
* **Tailwind CSS**
* **Lucide React**

## Backend

* **Node.js**
* **Express.js**
* **JWT**
* **bcrypt**
* **CORS**
* **dotenv**

## Database

* **PostgreSQL**
* **Neon PostgreSQL**
* **pg (node-postgres)**

## Development & Testing

* **Postman**
* **Git & GitHub**
* **Vercel**
* **Railway**

---

# 🏗️ Application Architecture

```text
                         USER
                          │
                          ▼
                 ┌─────────────────┐
                 │ Next.js Frontend│
                 │   App Router    │
                 └────────┬────────┘
                          │
                    HTTP / REST API
                          │
                          ▼
                 ┌─────────────────┐
                 │ Express Backend │
                 └────────┬────────┘
                          │
             ┌────────────┼────────────┐
             │            │            │
             ▼            ▼            ▼
       Authentication  Authorization  Validation
             │            │            │
             ▼            ▼            ▼
            JWT          RBAC       Middleware
             │            │            │
             └────────────┼────────────┘
                          │
                          ▼
                  ┌───────────────┐
                  │  Controllers  │
                  └───────┬───────┘
                          │
                          ▼
                  ┌───────────────┐
                  │ PostgreSQL DB │
                  │     Neon      │
                  └───────────────┘
                          │
                          ▼
                    JSON Response
                          │
                          ▼
                 ┌─────────────────┐
                 │ Next.js Frontend│
                 │       UI        │
                 └─────────────────┘
```

---

# 📁 Project Structure

```text
student-course-portal/
│
├── frontend/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── globals.css
│   │   ├── not-found.js
│   │   │
│   │   ├── login/
│   │   │   └── page.js
│   │   │
│   │   ├── signup/
│   │   │   └── page.js
│   │   │
│   │   ├── profile/
│   │   │   └── page.js
│   │   │
│   │   ├── contact/
│   │   │   └── page.js
│   │   │
│   │   ├── courses/
│   │   │   ├── page.js
│   │   │   └── [slug]/
│   │   │       └── page.js
│   │   │
│   │   └── instructors/
│   │       └── page.js
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── CourseCard.jsx
│   │   ├── InstructorCard.jsx
│   │   ├── CourseForm.jsx
│   │   └── SectionTitle.jsx
│   │
│   ├── lib/
│   │   └── api.js
│   │
│   ├── data/
│   │   ├── courses.js
│   │   └── instructors.js
│   │
│   ├── package.json
│   ├── .env.local
│   └── .env.example
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── courseController.js
│   │   └── profileController.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── courseRoutes.js
│   │   └── profileRoutes.js
│   │
│   ├── middleware/
│   │   ├── authenticateToken.js
│   │   ├── authorizeRole.js
│   │   ├── validateCourse.js
│   │   └── errorHandler.js
│   │
│   ├── utils/
│   │   └── ...
│   │
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .env.example
│
├── README.md
└── .gitignore
```

> The exact file structure may vary slightly as the project continues to evolve.

---

# ⚙️ Installation

## Prerequisites

Make sure you have installed:

* Node.js v18 or higher
* npm
* PostgreSQL / Neon account
* Git

---

## Clone the Repository

```bash
git clone https://github.com/MuhammadAdeel0072/student-course-portal.git

cd student-course-portal
```

> Replace the repository URL above if your GitHub repository uses a different name.

---

## Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

## Install Backend Dependencies

```bash
cd ../backend
npm install
```

---

# 🔐 Environment Variables

Environment variables are required for the frontend and backend.

## Frontend

Create:

```text
frontend/.env.local
```

Add:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Create:

```text
frontend/.env.example
```

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## Backend

Create:

```text
backend/.env
```

Example:

```env
PORT=5000
FRONTEND_URL=http://localhost:3000

DATABASE_URL=your_neon_database_url

JWT_SECRET=your_secure_jwt_secret
```

Create:

```text
backend/.env.example
```

```env
PORT=5000
FRONTEND_URL=http://localhost:3000

DATABASE_URL=your_neon_database_url

JWT_SECRET=your_secure_jwt_secret
```

> **Important:** Never commit `.env` files or real secrets to GitHub.

---

# 🗄️ Database

The application uses **PostgreSQL hosted on Neon**.

The database stores application data such as:

* Users
* Roles
* Courses
* Course ownership
* Timestamps

Example user roles:

```text
admin
user
```

The backend connects to Neon PostgreSQL using the `pg` package.

```text
Next.js
   │
   ▼
Express API
   │
   ▼
pg / PostgreSQL
   │
   ▼
Neon PostgreSQL
```

---

# 🔐 Authentication

The application uses **JWT (JSON Web Token)** authentication.

## Authentication Flow

```text
User
 │
 ├── Sign Up
 │
 ▼
Password hashed with bcrypt
 │
 ▼
User stored in PostgreSQL
 │
 ▼
Login
 │
 ▼
Credentials verified
 │
 ▼
JWT generated
 │
 ▼
Client stores authentication state
 │
 ▼
JWT sent with protected API requests
 │
 ▼
Authentication Middleware
 │
 ▼
Request Authorized
```

---

# 🛡️ Authorization & RBAC

Authentication answers:

> **Who are you?**

Authorization answers:

> **What are you allowed to do?**

This project implements both.

## User Roles

### `user`

Regular authenticated users can access functionality allowed by their permissions.

They cannot perform admin-only operations.

### `admin`

Administrators have elevated permissions and can perform protected course management operations.

---

# 👑 Demo Admin Account

You can test the admin authorization flow using the following demo account:

```text
Email: text@example.com
Password: Admin123!
Role: admin
```

> ⚠️ **Security Notice:** This credential is intended only for demonstration/testing. Do not use this password for a real production administrator account. If this repository is public, use a dedicated demo account with no sensitive access.

After signing in with the admin account, admin-only actions become available according to the application's authorization rules.

---

# 🔒 Protected CRUD Operations

Course CRUD operations are protected by authentication and authorization middleware.

| Operation     | Authentication  | Authorization                     |
| ------------- | --------------- | --------------------------------- |
| GET Courses   | Optional/Public | Public                            |
| GET Course    | Optional/Public | Public                            |
| POST Course   | Required        | Authorized role                   |
| PUT Course    | Required        | Authorized role + ownership rules |
| DELETE Course | Required        | Authorized role + ownership rules |

The backend does not rely only on frontend restrictions.

Authorization is enforced on the **server side**.

---

# 👤 Ownership-Based Authorization

The application also demonstrates ownership-based authorization.

A user should not be able to modify a resource simply because they are authenticated.

The backend verifies:

```text
Is the user authenticated?
        │
        ▼
Does the user have the required role?
        │
        ▼
Does the user own the resource?
        │
        ▼
Allow / Deny operation
```

This prevents users from modifying resources belonging to other users.

---

# 🚦 HTTP Authorization Responses

The API distinguishes between authentication and authorization errors.

## `401 Unauthorized`

Returned when the request does not contain valid authentication credentials.

Examples:

```text
Missing JWT
Invalid JWT
Expired JWT
Unauthenticated request
```

Example response:

```json
{
  "message": "Authentication required"
}
```

---

## `403 Forbidden`

Returned when the user is authenticated but does not have permission to perform the requested operation.

Examples:

```text
Regular user attempting admin-only action
User attempting to modify another user's resource
```

Example response:

```json
{
  "message": "You do not have permission to perform this action"
}
```

---

# 🔌 API Endpoints

Base URL:

```text
http://localhost:5000/api
```

## Authentication

| Method | Endpoint           | Description                      |
| ------ | ------------------ | -------------------------------- |
| POST   | `/api/auth/signup` | Register a new user              |
| POST   | `/api/auth/login`  | Login user                       |
| GET    | `/api/profile`     | Get authenticated user's profile |

---

## Courses

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| GET    | `/api/courses`     | Get all courses     |
| GET    | `/api/courses/:id` | Get a single course |
| POST   | `/api/courses`     | Create a course     |
| PUT    | `/api/courses/:id` | Update a course     |
| DELETE | `/api/courses/:id` | Delete a course     |

---

# 🧪 Testing with Postman

You can test the complete authentication and authorization flow using Postman.

## 1. Register a User

```http
POST /api/auth/signup
```

Example:

```json
{
  "name": "Test User",
  "email": "user@example.com",
  "password": "Password123!"
}
```

---

## 2. Login

```http
POST /api/auth/login
```

Example:

```json
{
  "email": "user@example.com",
  "password": "Password123!"
}
```

The API returns an authentication token.

---

## 3. Send JWT with Protected Requests

For protected endpoints:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 4. Test Authorization

Test scenarios such as:

### Valid authenticated request

```text
Expected: 200 OK
```

### No token

```text
Expected: 401 Unauthorized
```

### Invalid token

```text
Expected: 401 Unauthorized
```

### Authenticated user without permission

```text
Expected: 403 Forbidden
```

### User modifying another user's resource

```text
Expected: 403 Forbidden
```

### Admin performing authorized operation

```text
Expected: 200/201
```

---

# 📡 Example API Requests

## Get Courses

```bash
curl http://localhost:5000/api/courses
```

---

## Create Course

```bash
curl -X POST http://localhost:5000/api/courses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "title": "Node.js",
    "description": "Learn Node.js and Express.",
    "duration": "6 weeks"
  }'
```

---

## Update Course

```bash
curl -X PUT http://localhost:5000/api/courses/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "title": "Advanced Node.js",
    "description": "Learn advanced Node.js and Express.",
    "duration": "10 weeks"
  }'
```

---

## Delete Course

```bash
curl -X DELETE http://localhost:5000/api/courses/1 \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

---

# 🚀 Running Locally

Start the backend:

```bash
cd backend
npm run dev
```

Backend:

```text
http://localhost:5000
```

Start the frontend in another terminal:

```bash
cd frontend
npm run dev
```

Frontend:

```text
http://localhost:3000
```

---

# 🌐 Production Deployment

The project is designed to run as a separate frontend and backend application.

```text
                    Production
                        │
          ┌─────────────┴─────────────┐
          │                           │
          ▼                           ▼
      Vercel                       Railway
   Next.js Frontend              Express Backend
                                      │
                                      ▼
                                Neon PostgreSQL
```

## Production Frontend

```text
https://student-portal.adeelkhan.online/
```

## Production Backend

Configure the production API URL through:

```env
NEXT_PUBLIC_API_URL=YOUR_PRODUCTION_BACKEND_URL
```

The backend should also be configured with the production frontend URL:

```env
FRONTEND_URL=YOUR_PRODUCTION_FRONTEND_URL
```

---

# 🧠 Learning Concepts

This project was built to practice real-world full-stack development concepts.

## Authentication

* Authentication vs Authorization
* JWT Authentication
* JWT Access Tokens
* Password Hashing
* bcrypt
* Login and Signup
* Authentication Middleware
* Protected Routes

## Authorization

* Role-Based Access Control (RBAC)
* Admin and User Roles
* Role-Based Permissions
* Ownership-Based Authorization
* Protected CRUD Operations
* Server-Side Authorization
* Frontend Permission-Based UI
* `401 Unauthorized`
* `403 Forbidden`

## Backend

* Express.js
* REST API Design
* Controllers
* Routes
* Middleware
* Request Validation
* Centralized Error Handling
* CORS
* Environment Variables
* HTTP Status Codes

## Database

* PostgreSQL
* Neon PostgreSQL
* SQL Queries
* Relational Data
* User Roles
* Resource Ownership
* Database Connection using `pg`

## Frontend

* Next.js App Router
* React
* Server and Client Components
* Dynamic Routes
* Component Reusability
* API Integration
* Client-Side Data Fetching
* Loading States
* Error States
* Authentication State
* Conditional UI
* Protected Actions

---

# 🎯 Today's Full-Stack Authorization Task

This project was extended from basic authentication into a complete authorization flow.

### Implemented

* [x] User authentication
* [x] JWT authentication
* [x] Password hashing
* [x] User roles
* [x] `admin` and `user` roles
* [x] Role-Based Access Control
* [x] Protected CRUD operations
* [x] Ownership-based authorization
* [x] `401` vs `403` responses
* [x] Frontend permission-based actions
* [x] PostgreSQL database
* [x] Neon PostgreSQL integration
* [x] API validation
* [x] Centralized error handling
* [x] API testing with Postman
* [x] Production deployment

---

# 📈 Authorization Flow

```text
                    API Request
                         │
                         ▼
                 ┌───────────────┐
                 │ JWT Provided? │
                 └───────┬───────┘
                         │
                ┌────────┴────────┐
                │                 │
               NO                YES
                │                 │
                ▼                 ▼
          401 Unauthorized   Verify JWT
                                  │
                                  ▼
                           Get User Identity
                                  │
                                  ▼
                           Check User Role
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
               Authorized                  Unauthorized
                    │                           │
                    ▼                           ▼
              Check Ownership              403 Forbidden
                    │
          ┌─────────┴─────────┐
          │                   │
         YES                  NO
          │                   │
          ▼                   ▼
       Allow              403 Forbidden
          │
          ▼
      Controller
          │
          ▼
      PostgreSQL
          │
          ▼
       Response
```

---

# 🎯 Learning Objectives

After completing this project, the following concepts have been practiced:

* Understand authentication vs authorization
* Implement JWT authentication
* Hash passwords securely
* Implement role-based access control
* Protect REST API endpoints
* Implement ownership checks
* Understand `401` vs `403`
* Build protected CRUD operations
* Connect Express with PostgreSQL
* Work with Neon PostgreSQL
* Implement request validation
* Implement centralized error handling
* Test APIs using Postman
* Connect Next.js with Express
* Build permission-aware frontend UI
* Deploy a full-stack application
* Understand production-style authorization architecture

---

# 📌 Future Improvements

Possible future enhancements include:

* Course enrollment
* Student dashboard
* Instructor dashboard
* Advanced admin panel
* Course categories
* Advanced search
* Advanced filtering
* Pagination improvements
* Refresh token rotation
* Email verification
* Forgot password flow
* Rate limiting
* API documentation with Swagger/OpenAPI
* Automated testing
* CI/CD pipeline
* Audit logging
* More granular permissions
* Course enrollment and progress tracking

---

# 👨‍💻 Author

**Muhammad Adeel**

* GitHub: https://github.com/MuhammadAdeel0072

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!

---

## 📚 Project Summary

The Student Course Portal started as a basic Next.js + Express application and evolved into a full-stack application demonstrating modern authentication and authorization concepts.

The current architecture follows:

```text
Next.js
   ↓
Express.js REST API
   ↓
JWT Authentication
   ↓
Role-Based Authorization
   ↓
Ownership Authorization
   ↓
PostgreSQL / Neon
```

The main goal of the project is to demonstrate how a real-world application moves beyond simply **logging users in** and starts controlling **what authenticated users are actually allowed to do**.
