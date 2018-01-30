This app can be found at: https://dry-fjord-23187.herokuapp.com/

# About

JS and Node.js app using Express server framework and Sequelize ORM with MySQL dialect for database.

JoinME is a personal goal tracking platform that allows the user to enter and track projects/goals, share them with other users, and search for active projects/goals to join in an effort to increase productivity, reach goal targets more effectively, and provide inspiration for setting new goals.

# Getting Started

First clone this repository:

```
https://github.com/emmapankey/JoinME
```

### Prerequisites

#### Node.js and npm
Go to the Node.js site: https://nodejs.org/en. Click the download button, and run through the installation file.
When you install node.js, npm is automatically installed.
To check if you have Node.js installed, run this command in your terminal:
```
node -v
```
To confirm that you have npm installed you can run this command in your terminal:
```
npm -v
```

### Installing Node Packages

In the terminal execute the following command to install all node dependencies (see package.json for list):

```
npm install
```

# Database Setup

This app uses the dotenv node package to load environment variables from a .env file into process.env. This allows the database configuration to be stored in an environment separate from code.

Create a .env file in the root of your directory and add the following code:

```
DBUSER=root
DBPASS=[enter your correct root password here]
DB=projects_db
```

You don’t need to build any tables. The Sequelize ORM will take care of that for you. Just open ‘joinme.sql’ in your MySQL workbench and run the sql script to create the database. Sequelize will create the following tables:

user
------
- name: string
- phone: string
- password: string
- email: string
- uid: string

project
------
- project_name: string
- project_type: string
- project_description: string

step
------
- step: string
- step_description: string
- completed: boolean

# Run

To run the application and connect to the Express server execute the following command in the server.js file:

```
node server.js
```

# Technologies Used

* Javascript and jQuery
* Node.js
* Express.js to handle routing
* Sequelize
* bcrypt for password hashing
* Passport for authentication
* Handlebars.js for client-side templating


# Authors

**Emma Pankey** (https://github.com/emmapankey)
**Justin Rice** (https://github.com/jsrice7391)
**Chase Leinart** (https://github.com/chaseleinart)
**Tom Peralto** (https://github.com/peraltot)
**Paul Hollingsworth** (https://github.com/HollingsworthX51)
