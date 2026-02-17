# Todo App

A simple **To-Do application** built with **TypeScript** for learning purposes.  
This project demonstrates CRUD operations, environment variable configuration, and basic database integration (MySQL).

---

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Running the App](#running-the-app)
- [Database Setup](#database-setup)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Create, read, update, and delete tasks
- Uses **TypeScript** for type safety
- Connects to a **MySQL** database
- Environment variable configuration

---

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- [MySQL](https://www.mysql.com/) (or Docker for local DB)

---

## Setup

1. Clone the repository:

```bash
git clone https://github.com/OliverMensahDev/todoapp.git
cd todoapp
```

2. Install the project dependencies:

```bash
npm install
```

3. Copy the example environment file and update your credentials:

```bash
cp .env.example .env
```

4. Edit `.env` and fill in your database credentials.

---

## Environment Variables

Your `.env` should contain:

```dotenv
DB_HOST=localhost
DB_PORT=3306
DB_NAME=todoapp
DB_USER=todoappuser
DB_PASSWORD=todoappuserpass
DB_ROOT_PASSWORD=rootpassword
```

> **Note:** Do **not** commit your real `.env` file. Use `.env.example` as a template.

---

## Running the App

Start the app locally:

```bash
npm run dev
```

The server will start on the port defined in your `.env` (default is 3000).

---

## Database Setup

Make sure your MySQL server is running and create the database and user:

```sql
CREATE DATABASE todoapp;
CREATE USER 'todoappuser'@'localhost' IDENTIFIED BY 'todoappuserpass';
GRANT ALL PRIVILEGES ON todoapp.* TO 'todoappuser'@'localhost';
FLUSH PRIVILEGES;
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repo  
2. Create a feature branch:

```bash
git checkout -b feature/your-feature
```

3. Commit your changes:

```bash
git commit -m "Add your message"
```

4. Push to your branch:

```bash
git push origin feature/your-feature
```

5. Open a Pull Request

---

## License

This project is licensed under the [MIT License](LICENSE).