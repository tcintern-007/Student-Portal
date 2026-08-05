# 🎓 Student Course Portal

A modern, responsive, and scalable **Student Course Portal** built with **Next.js App Router** and **Tailwind CSS**. This project demonstrates modern Next.js concepts such as **Server Components**, **Client Components**, **Dynamic Routing**, **Data-Driven Rendering**, and **Reusable Components**.

## 🚀 Live Demo

🌐 https://student-portal.adeelkhan.online/

---

## 📸 Preview

> Add screenshots or a GIF of your application here.

---

## ✨ Features

* 🏠 Responsive Home Page
* 📚 Dynamic Courses Page
* 👨‍🏫 Dynamic Instructors Page
* 📖 Dynamic Course Details Page
* 🔍 Real-time Course Search
* 🔗 Related Courses Section
* ⭐ Featured Courses
* 📞 Contact Page
* 🧩 Reusable Components
* 📂 Data-Driven Rendering
* ⚡ Server & Client Components
* 🔄 File-Based Routing
* 🎯 Dynamic Routes (`[slug]`)
* ⏳ Loading States
* 📭 Empty State Handling
* ❌ Custom 404 Page
* 📱 Fully Responsive Design

---

## 🛠️ Tech Stack

* **Next.js (App Router)**
* **React**
* **JavaScript (ES6+)**
* **Tailwind CSS**
* **Lucide React**

---

## 📁 Project Structure

```text
Student-Portal/
│
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   ├── not-found.js
│   │
│   ├── contact/
│   │   └── page.js
│   │
│   ├── courses/
│   │   ├── page.js
│   │   ├── loading.js
│   │   └── [slug]/
│   │       ├── page.js
│   │       └── loading.js
│   │
│   └── instructors/
│       ├── page.js
│       └── loading.js
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── CourseCard.jsx
│   ├── InstructorCard.jsx
│   ├── SearchBar.jsx
│   ├── Badge.jsx
│   └── SectionTitle.jsx
│
├── data/
│   ├── courses.js
│   └── instructors.js
│
├── public/
└── package.json
```

---

## 📖 Concepts Demonstrated

* Next.js App Router
* File-Based Routing
* Shared Layouts
* Dynamic Routing
* Server Components
* Client Components
* Dynamic Data Rendering
* Component Reusability
* Search & Filtering
* Loading UI
* Responsive Design
* Modern Folder Structure

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

Open your browser:

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
* Data Separation
* Dynamic Rendering
* Search Functionality
* Modern Next.js Project Structure

---

## 📌 Future Improvements

* User Authentication
* Backend Integration
* Database Support
* Course Enrollment
* Student Dashboard
* Instructor Dashboard
* Admin Panel
* API Integration
* Pagination
* Course Categories & Filters

---

## 👨‍💻 Author

**Muhammad Adeel**

* GitHub: https://github.com/MuhammadAdeel0072

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!
