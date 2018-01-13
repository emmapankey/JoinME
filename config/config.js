const dotenv = require("dotenv").config();


module.exports = {
    development: {
        username: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DB,
        host: "127.0.0.1",
        dialect: "mysql"
    },
    test: {
        username: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DB,
        host: "127.0.0.1",
        dialect: "mysql"
    },
    production: {
        username: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DB,
        host: "127.0.0.1",
        dialect: "mysql"
    }
}