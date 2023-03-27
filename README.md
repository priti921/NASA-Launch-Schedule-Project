<h1 alight="center"></h1>

<div align="center">
  <h1 align="center">🚀 NASA Launch Schedule Project 🚀</h1>
  <h3 align="center">🌠 Launch Your Exoplanet Space Mission 🌠</h3>
    <p align="center">
      <img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black" />
      <img src="https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white" />
      <img src="https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white" />
      <img src="https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white" />
      <img src="https://img.shields.io/badge/PM2-2B037A.svg?style=for-the-badge&logo=PM2&logoColor=white" />
      <img src="https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white" >     
  </p>
</div>

---

## 📍 Table of Contents

- [📍 Table of Contents](#-table-of-contents)
- [🤖 Overview](#-overview)
- [🗺 System Design](#-system-design)
- [🚀 Getting Started](#-getting-started)
  - [💻 Installation](#-installation)
- [🧪 Running-tests](#-running-tests)
- [📦 Deployment](#-deployment)
- [🔮Features](#features)
- [🛠 Technologies Used](#-technologies-used)
- [📂Data Sources](#data-sources)

---

## 🤖 Overview

NASA Launch Schedule Project is a full-stack web application built with React, Arwes, Node.js, Express.js, and MongoDB. It allows users to schedule space missions to exoplanets using NASA Kepler data.

The app has a user-friendly interface that allows users to schedule a space mission by choosing a date, rocket name, exploration name, and exoplanet destination. Users can also view upcoming missions and mission history, including cancelled missions.

The app's backend is built with Node.js and Express.js, and data is stored in MongoDB. Jest is used for testing, and PM2 is used for deployment. NASA Kepler CSV data is used as the app's data source.

To get started with the app, users can clone the repository to their local machine, install the necessary dependencies, add a .env file in the server src folder for MongoDB API name and password, and start the server by running npm run watch in the project directory. Users can then navigate to http://localhost:8000 to view the app.

Overall, the NASA Launch Schedule Project is an impressive full-stack application that allows users to schedule space missions and view mission history using NASA Kepler data.

<p align="right">
  <a href="#top"><b>🔝 Return </b></a>
</p>

---

## 🗺 System Design

<img src="./system%20design.png" />



> #### In the diagram, the frontend is represented by the React component, which sends requests to the backend server through HTTP requests. The backend is built using Node.js and Express.js and is responsible for handling these requests, interacting with the database (MongoDB), and sending responses back to the frontend.
> #### The system design also includes a box labeled "Kepler Data" which represents the NASA Kepler CSV data that the app uses as its data source. The backend server communicates with this data source to retrieve information about exoplanets and space missions.

---


## 🚀 Getting Started

<br />


### 💻 Installation

To run the project, follow these steps:

 1. **Clone the repository to your local machine.**

```bash
  git clone https://github.com/priti921/NASA-Launch-Schedule-Project.git
```

 2. **Install the dependencies**
Install all the node_modules

```bash
npm install
```
 3. **Add a .env file in server src folder for mongodb api name and password**

The project uses MongoDB for data storage. To connect to your MongoDB database, you need to create a .env file in the server/src directory with the following format:

```dotenv
MONGO_USERNAME="api-name"
MONGO_PASSWORD="password"
```

 4. **Start the server by running npm run watch in the project directory.**
```bash
npm run watch
```

 5. **Open a web browser and navigate to <http://localhost:8000> to view the app.**

---

## 🧪 Running-tests

```bash
npm run test
```
---
## 📦 Deployment

To deploy the app using a cluster, run the following command in the project directory:

```bash
npm run deploy-cluster
```
---
## 🔮Features

The app has the following features:

- Schedule a space mission by choosing a date, rocket name, exploration name, and exoplanet destination.
- View upcoming missions.
- View mission history, including cancelled missions.
---
## 🛠 Technologies Used

The project uses the following technologies:

    Frontend: React, Arwes
    Backend: Node.js, Express.js, PM2, MongoDB
    Test: Jest
---
## 📂Data Sources

The app uses NASA Kepler CSV data as its data source.


If you find any bug or want to contribute to this project, feel free to create an issue or a pull request.

Thank you!
