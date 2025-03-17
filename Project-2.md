# TODO App - Project Outline (Simplified)

## Overview
Build a simple **TODO app** where users can create, update, delete, and list tasks.
- Structuring a web application with **HTML, CSS, and JavaScript**
- Building a backend using **Node.js with Express**
- Interacting with a **MySQL database**
- Implementing basic **CRUD operations**

---

## 1. Getting Started

### Install WampServer
To host your **HTML, CSS, and JavaScript frontend** and use **MySQL** for the database, install WampServer:

🔗 **Download WampServer**: [https://www.wampserver.com/en/](https://www.wampserver.com/en/)

#### **Install VS Code**
Use **Visual Studio Code (VS Code)** for writing your frontend and backend code:

🔗 **Download VS Code**: [https://code.visualstudio.com/](https://code.visualstudio.com/)

#### **Install Node.js**
Install **Node.js** to run the backend server:

🔗 **Download Node.js**: [https://nodejs.org/](https://nodejs.org/)

### Setup Steps
1. **Install WampServer** and start the app.
2. On your taskbar left-click on **Wampp** and click **phpMyAdmin** and to **phpMyAdmin** again and setup phpmyadmin and create the MySQL database.
3. Create a new database called `todo_app`.
4. Use the provided SQL structure below to create the `todos` table.
5. Run the Node.js backend separately to handle API requests on VSCode.

### Express server
1. Create a new folder and open it in VSCODE
2. Run `npm init` and just press enter for everything
3. Run `npm install express mysql2 cors body-parser`

| Packages     | Description        | Link |
|------------|------------|------------|
| express       | Handles routing and API creation        | [Express](https://www.npmjs.com/package/express) |
| mysql2    | Connects Node.js to MySQL | [mysql2](https://www.npmjs.com/package/mysql2) |
| cors | Allows frontend to make API requests    | [cors](https://www.npmjs.com/package/cors) |
| body-parser	 | Parses incoming request data (optional) | [body-parser](https://www.npmjs.com/package/body-parser) |

---

## 2. Database Structure (MySQL)

### `todos` Table

| Column     | Type        | Attributes |
|------------|------------|------------|
| `id`       | INT        | PRIMARY KEY, AUTO_INCREMENT |
| `title`    | VARCHAR(255) | NOT NULL |
| `completed` | BOOLEAN    | DEFAULT 0, NOT NULL |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP |

---

## 3. API Endpoints (Node.js & Express)

### TODO Management (No Authentication Required)

| Method  | Endpoint       | Description |
|---------|---------------|-------------|
| `GET`   | `/todos`      | Get all todos |
| `POST`  | `/todos`      | Create a new todo (`title` required) |
| `PUT`   | `/todos/:id`  | Update a todo (`title` and `completed` can be updated) |
| `DELETE`| `/todos/:id`  | Delete a todo |

---
