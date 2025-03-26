# Digital Resume Builder (MERN Stack)

##  Overview

The **Digital Resume Builder** is a web-based platform that allows users to create, customize, and share their professional resumes online. It is built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)** and provides an intuitive UI for dynamic resume generation.

##  Features

- User authentication (Sign up/Login)
- Drag-and-drop resume customization
- Pre-designed templates and full customization options
- Real-time preview of resumes
- PDF download & sharing functionality

## Tech Stack

- **Frontend:** React.js, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT (JSON Web Token)

##  Project Structure

```
Digital-Resume-Builder/
│-- resume-builder-frontend/  # React Frontend
│   ├── build/
│   ├── img/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   ├── setupTests.js
│   ├── .env
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│
│-- resume-builder-backend/   # Express.js Backend
│   ├── models/
│   ├── node_modules/
│   ├── routes/
│   ├── .env
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
```

##  Installation & Setup

### Prerequisites

- Node.js & npm installed
- MongoDB setup (local or cloud)

### 1) Clone the repository

```sh
$ git clone https://github.com/Yadhavaramanan/Digital-Resume-Builder-using-MERN-Stack.git
$ cd Digital-Resume-Builder
```

### 2) Install dependencies

#### Backend

```sh
$ cd resume-builder-backend
$ npm install
```

#### Frontend

```sh
$ cd ../resume-builder-frontend
$ npm install
```

### 3) Configure Environment Variables

Create a `.env` file in the `resume-builder-backend` folder and set the following variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUD_STORAGE_KEY=your_storage_key (if applicable)
```

### 4) Run the project

#### Start Backend Server

```sh
$ cd resume-builder-backend
$ npm start
```

#### Start Frontend

```sh
$ cd ../resume-builder-frontend
$ npm start
```

### 5) Open in Browser

```
http://localhost:3000
```

## Future Enhancements

- More customizable templates
- Resume analytics & tracking
- Integration with job portals

## Contributing

We welcome contributions! Feel free to fork the repo and submit pull requests.

##  License

This project is licensed under the MIT License.

---

Developed by Yadhavaramanan C

