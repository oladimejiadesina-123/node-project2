const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

const app = express();

// 1) Middleware

app.use(morgan('dev'))

app.use(express.json());

app.use((req, res, next) => {
    console.log('Hello from middleware 👏');
    next();
})


  




app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter)
// 4) Start Server

module.exports = app;