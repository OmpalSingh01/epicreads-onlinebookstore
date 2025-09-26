<h1 align="center">📚 Epic Reads - Online Bookstore</h1>

<p align="center">
  Epic Reads is a <b>full-stack online bookstore</b> built with the <b>MERN stack</b>.  
  It provides readers with a seamless platform to <b>browse</b>, <b>purchase</b>, and <b>manage books</b>,  
  featuring a modern, responsive design optimized for <b>desktop</b>, <b>tablet</b>, and <b>mobile</b>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Stack-MERN-green?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/Frontend-React-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/UI-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Auth-JWT-black?style=for-the-badge&logo=jsonwebtokens" />
  <img src="https://img.shields.io/badge/Payment-Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Deployed%20On-Vercel-black?style=for-the-badge&logo=vercel" />
  <img src="https://img.shields.io/badge/Backend-Render-purple?style=for-the-badge&logo=render" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/OmpalSingh01/epicreads-onlinebookstore?style=for-the-badge&logo=github" />
  <img src="https://img.shields.io/github/forks/OmpalSingh01/epicreads-onlinebookstore?style=for-the-badge&logo=github" />
  <img src="https://img.shields.io/github/issues/OmpalSingh01/epicreads-onlinebookstore?style=for-the-badge" />
  <img src="https://img.shields.io/github/issues-pr/OmpalSingh01/epicreads-onlinebookstore?style=for-the-badge" />
  <img src="https://img.shields.io/github/last-commit/OmpalSingh01/epicreads-onlinebookstore?style=for-the-badge" />
  <img src="https://img.shields.io/github/repo-size/OmpalSingh01/epicreads-onlinebookstore?style=for-the-badge" />
</p>

---

<p align="center">
  🚀 <a href="https://epicread1.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Now-brightgreen?style=for-the-badge&logo=vercel" />
  </a>
</p>

---
# 🎯 Project Objectives

Epic Reads is designed with the goal of creating a modern, scalable, and user-friendly online bookstore that:

✔️ Enables efficient book browsing, purchasing, and management.
✔️ Provides a responsive and accessible UI using Tailwind CSS and DaisyUI.
✔️ Supports secure authentication and streamlined checkout.
✔️ Ensures cross-device compatibility (desktop, tablet, mobile).

---

# 🛠️ Tech Stack  

<p align="center">
  <table>
    <tr>
      <td><b>🎨 Frontend</b></td>
      <td>React, Tailwind CSS, DaisyUI</td>
    </tr>
    <tr>
      <td><b>⚙️ Backend</b></td>
      <td>Node.js, Express.js</td>
    </tr>
    <tr>
      <td><b>🗄️ Database</b></td>
      <td>MongoDB (Atlas)</td>
    </tr>
    <tr>
      <td><b>🔐 Authentication & Security</b></td>
      <td>JWT, bcrypt.js</td>
    </tr>
    <tr>
      <td><b>💳 Payment Gateway</b></td>
      <td>Razorpay Integration</td>
    </tr>
    <tr>
      <td><b>🧪 API Testing</b></td>
      <td>Postman</td>
    </tr>
    <tr>
      <td><b>🚀 Deployment</b></td>
      <td>Vercel (Frontend), Render (Backend)</td>
    </tr>
  </table>
</p>


---

# ✨ Features

📖 Book Catalog – Explore a wide range of books by categories and genres.

🔍 Search & Filter – Quickly find books by title, author, or genre.

🛒 Shopping Cart – Add, remove, and manage books before checkout.

👤 User Authentication – Secure Sign up/Login with encrypted passwords.

💳 Payment Integration – Razorpay-powered seamless checkout.

📱 Responsive UI – Optimized for all screen sizes.

🔐 JWT Authentication – Ensures secure user sessions.

📦 Order Management – Keep track of purchased books.

---

## 📸 Screenshots / Demo  

<p align="center">
  <table>
    <tr>
      <td align="center">
        <img width="100%" alt="Screenshot 1" src="https://github.com/user-attachments/assets/4bdd1f7f-4ca5-424e-8964-08be436be8f3" />
        <br /><b>📚 Home Page</b>
      </td>
      <td align="center">
        <img width="100%" alt="Screenshot 2" src="https://github.com/user-attachments/assets/f04515a9-ce65-4e1e-8a8f-92aa95af54d4" />
        <br /><b>🔍 Book Catalog</b>
      </td>
    </tr>
    <tr>
      <td align="center">
        <img width="100%" alt="Screenshot 3" src="https://github.com/user-attachments/assets/b6036cb4-2f70-4d4f-87d0-2f951d7e659c" />
        <br /><b>🛒 Shopping Cart</b>
      </td>
      <td align="center">
        <img width="100%" alt="Screenshot 4" src="https://github.com/user-attachments/assets/b0631b0e-33e3-43a6-87d7-974805ee4f09" />
        <br /><b>👤 User Authentication</b>
      </td>
    </tr>
  </table>
</p>


---

# ⚙️ Getting Started

Follow these steps to set up Epic Reads locally:

## 1️⃣ Clone the Repository
```
git clone https://github.com/OmpalSingh01/epicreads-onlinebookstore.git
```

## 2️⃣ Install Dependencies

For both client and server:


```npm install```

## 3️⃣ Setup Environment Variables

Create a .env file inside the server directory and add:

```
PORT=4001
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
RZP_KEY=your-razorpay-key

```

## 4️⃣ Run the Application
```
Start Backend
npm start

Start Frontend
npm run dev

```
---

# 🧩 Folder Structure

```
epicreads-onlinebookstore/
│── client/          # React frontend
│   ├── src/         
│   ├── components/  # UI components
│   ├── pages/       # Book, Cart, Auth, Checkout pages
│   └── utils/       # API calls, helpers
│
│── server/          # Express backend
│   ├── models/      # MongoDB schemas
│   ├── routes/      # API routes
│   ├── controllers/ # Business logic
│   ├── middleware/  # Auth, error handling
│   └── config/      # DB connection, env setup
│
└── README.md

```

---

# 🏆 Achievements

✅ Successfully integrated secure JWT authentication for users.
✅ Implemented real-time Razorpay payment gateway for seamless checkout.
✅ Built a fully responsive UI with Tailwind CSS + DaisyUI.
✅ Optimized backend APIs for fast and scalable book retrieval.
✅ Deployed on Vercel + Render with CI/CD support.

---

# 🔮 Future Enhancements

🚀 Wishlist & Favorites – Let users save books for later.
📝 Book Reviews & Ratings – Community-driven feedback system.
🛠️ Admin Dashboard – Manage inventory, users, and orders.
📦 Order History & Tracking – Better post-purchase experience.
🌍 Internationalization (i18n) – Multi-language support.
📚 Recommendation Engine – AI-powered book suggestions.
🔔 Email Notifications – Order confirmations & promotions.

---

# 🤝 Contributing

Contributions are welcome! 🎉

```
Fork the repo

Create a feature branch:

git checkout -b feature/your-feature


Commit changes:

git commit -m "Add your feature"


Push to branch:

git push origin feature/your-feature


Open a Pull Request 🚀
```

---

## 📄 License

This project is licensed under the MIT License – feel free to use, modify, and distribute.

## 👨‍💻 Maintainer

Mohit Singh
📧 [mohitsingh.2626452@gmail.com]
🔗 Epic Reads – Live
