# 🎓 Student Course Portal

A modern and responsive **Student Course Portal** built with **Next.js App Router** and **Tailwind CSS**. This project demonstrates the core concepts of Next.js, including **File-Based Routing**, **Layouts**, **Dynamic Routes**, and **Reusable Components**.

## 🚀 Live Demo

> Coming Soon

## 📸 Preview

> Add screenshots or a GIF here after deployment.

---

## ✨ Features

- 🏠 Home Page
- 📚 Courses Page
- 👨‍🏫 Instructors Page
- 📖 Dynamic Course Details Page
- 📞 Contact Page
- 🔄 File-Based Routing
- 📂 App Router
- 🧩 Shared Layout (Navbar & Footer)
- 🔗 Navigation using `next/link`
- 🎯 Dynamic Routes using `[slug]`
- 📱 Fully Responsive Design
- 🎨 Modern UI with Tailwind CSS
- ❌ Custom 404 Page
- ♻️ Reusable Components

---

## 🛠️ Tech Stack

- **Next.js (App Router)**
- **React**
- **Tailwind CSS**
- **JavaScript**
- **Lucide React**

---

## 📁 Project Structure

```text
app/
│
├── layout.js
├── page.js
├── globals.css
│
├── courses/
│   ├── page.js
│   └── [slug]/
│       └── page.js
│
├── instructors/
│   └── page.js
│
├── contact/
│   └── page.js
│
└── not-found.js

components/
├── Navbar.jsx
├── Footer.jsx
├── Hero.jsx
├── CourseCard.jsx
├── InstructorCard.jsx

data/
└── courses.js

public/
└── images/
```

---

## 📖 Concepts Demonstrated

- Next.js App Router
- File-Based Routing
- Shared Layouts
- Dynamic Routing
- Component Reusability
- Responsive Design
- Static Data Rendering

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/student-course-portal.git
```

Navigate into the project:

```bash
cd student-course-portal
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 🌐 Dynamic Routes

Example routes:

```text
/courses/web-development

/courses/ai-engineering

/courses/ui-ux-design
```

Each route is handled using:

```text
app/courses/[slug]/page.js
```

---

## 🎯 Learning Objectives

This project was developed to practice:

- App Router
- File-Based Routing
- Layouts
- Navigation with `next/link`
- Dynamic Routes
- Modern Next.js Project Structure

---

## 📌 Future Improvements

- Authentication
- Backend Integration
- Database Support
- Search & Filters
- Course Enrollment
- Dashboard
- API Integration

---

## 👨‍💻 Author

**Muhammad Adeel**

- GitHub: https://github.com/MuhammadAdeel0072

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
