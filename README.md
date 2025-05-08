# 📦 Node.js WebSocket API Project

A REST API built with **Express.js**, supporting real-time communication using **Socket.IO**, with two user roles (User & Admin), email verification, logging, rate-limiting, and Swagger documentation.

---

## ✅ Features

- 👥 **Two roles**: User and Admin
- 📄 **Separate Swagger Docs**:
  - User: `/api/docs/user`
  - Admin: `/api/docs/admin`
- 📝 **User registration** with email verification
- 🔒 **Admin seeding** and protected admin creation
- 📡 **WebSocket messaging**:
  - Private messaging between users
  - Group chat: join, message, and leave
- 🔍 **Server-side validation** using `express-validator`
- 📈 **Logging** with daily rotation using `winston`
- 🛡️ **Rate limiting** (20 requests/15 mins per IP)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or above)
- MongoDB Atlas or local MongoDB instance
- Ngrok account (for sharing the API)

### Installation
```bash
npm install
```

### Environment Variables
Create a `.env` file in root:
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname
JWT_SECRET=supersecret
PORT=5000
EMAIL_FROM=youremail@gmail.com
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=your_app_password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
```

---

## ⚙️ Run the App
```bash
node server.js
```

To run the admin seeder once:
```bash
node seed/adminSeeder.js
```

---

## 🌐 Public Access via ngrok
To make the server public:
```bash
npx ngrok http 5000
```

---

## 🔌 WebSocket Events

### 1. Register user socket:
```js
register_user → "user1@example.com"
```

### 2. Private message:
```json
{
  "from": "user1@example.com",
  "to": "user2@example.com",
  "message": "Hello"
}
```
Event: `private_message`

### 3. Join group:
```json
{
  "group": "devs",
  "user": "user1@example.com"
}
```
Event: `join_group`

### 4. Group message:
```json
{
  "group": "devs",
  "from": "user1@example.com",
  "message": "Hi team!"
}
```
Event: `group_message`

### 5. Leave group:
```json
{
  "group": "devs",
  "user": "user1@example.com"
}
```
Event: `leave_group`

---

## 📬 API Endpoints

### POST /api/auth/register
- Registers a user with validation

### GET /api/auth/verify-email/:token
- Verifies email using JWT token

### POST /api/auth/login
- Authenticates user and returns JWT

### GET /api/user/profile
- Protected route for user info (requires Bearer token)

### POST /api/admin/add-admin
- Creates a new admin (admin-only route)

---

## 📚 Swagger Docs

- User Docs: `http://localhost:5000/api/docs/user`
- Admin Docs: `http://localhost:5000/api/docs/admin`

---

## 🔒 Security
- JWT authentication
- Email verification
- Rate limiting (20 reqs/15 mins)
- Validations for all input fields

---

## 🛠 Dev Tools Used
- Express.js
- MongoDB + Mongoose
- Socket.IO
- express-validator
- nodemailer
- winston & winston-daily-rotate-file
- express-rate-limit
- swagger-jsdoc + swagger-ui-express

---

## 👨‍💻 Author
**Aadesh Shrivastav**  
[GitHub](https://github.com/AadeshTech) · [Email](mailto:saadesh007@gmail.com)

---

## 📄 License
MIT
