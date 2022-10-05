const express = require('express');
const port = 9000;

const usersRouter = require('./users/users.router')

const app = express();
app.use(express.json());


app.use("/", usersRouter)

app.listen(port , ()=>{
    console.log(`Server started at port ${port}`);
})