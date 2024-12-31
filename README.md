# Digital Resume Builder using MERN Stack

## Overview
The **Digital Resume Builder** is a web application that allows users to create, edit, and download professional resumes. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), this project offers an intuitive interface and powerful backend functionality to help users craft their resumes seamlessly.

---

## Features

- **User Authentication**: Secure login and signup functionality using JWT.
- **Dynamic Resume Templates**: Choose from multiple professionally designed templates.
- **Real-Time Preview**: See updates to the resume in real time as you make edits.
- **Export Options**: Download resumes in PDF format.
- **Cloud Storage**: Save and retrieve resumes from a secure cloud database.
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.

---

## Tech Stack

### Frontend:
- **React**: For building dynamic user interfaces.
- **CSS/Bootstrap**: For responsive and visually appealing designs.

### Backend:
- **Node.js**: For server-side logic.
- **Express.js**: For handling API requests.

### Database:
- **MongoDB**: For storing user data and resume details.

---

## Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/)
- A code editor like [VS Code](https://code.visualstudio.com/)

---

## Installation

### Clone the Repository:
```bash
$ git clone https://github.com/your-username/digital-resume-builder.git
$ cd digital-resume-builder
```

### Backend Setup:
1. Navigate to the `backend` folder:
    ```bash
    $ cd backend
    ```
2. Install dependencies:
    ```bash
    $ npm install
    ```
3. Create a `.env` file and configure the following variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    ```
4. Start the server:
    ```bash
    $ npm start
    ```

### Frontend Setup:
1. Navigate to the `frontend` folder:
    ```bash
    $ cd ../frontend
    ```
2. Install dependencies:
    ```bash
    $ npm install
    ```
3. Start the React development server:
    ```bash
    $ npm start
    ```

---

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Sign up or log in to the application.
3. Create a new resume by entering your details and selecting a template.
4. Preview your resume in real-time.
5. Save your progress or export the resume as a PDF.

---

## Folder Structure

```
root
├── backend
│   ├── models
│   ├── routes
│   ├── controllers
│   ├── config
│   └── server.js
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── assets
│   │   └── App.js
└── README.md
```

---

## API Endpoints

### User Authentication:
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Authenticate an existing user.

### Resume Management:
- `GET /api/resumes`: Fetch all resumes for a user.
- `POST /api/resumes`: Create a new resume.
- `PUT /api/resumes/:id`: Update a resume by ID.
- `DELETE /api/resumes/:id`: Delete a resume by ID.

---

## Contributing

Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch:
    ```bash
    $ git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    $ git commit -m "Description of feature"
    ```
4. Push to the branch:
    ```bash
    $ git push origin feature-name
    ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express Documentation](https://expressjs.com/)

---

