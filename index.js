const serverless = require('serverless-http');
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv');
const userRoutes = require('./routes/user')
dotenv.config()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/v1', userRoutes)

mongoose.connect(process.env.MONGO_URL.replace("<password>", process.env.MONGO_PASSWORD)
    , { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }).then(() => {
        console.log("server Started")
    }).catch((err) => {
        console.log("Error in connecting to DataBase", err.message)
    })

module.exports.handler = serverless(app);