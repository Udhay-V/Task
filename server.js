const express = require('express');
const mongoose = require('mongoose');

const app = express();


//database
mongoose.connect('mongodb://localhost:27017/TASK', {useNewUrlParser: true })
.then(() => console.log("Connected to database"))
.catch(err => console.log(err));

//middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(function (req,res,next)
{
// Website you wish to allow to connect
res.setHeader('Access-Control-Allow-Origin', '*');

// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

 // Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

// Set to true if you need the website to include cookies in the requests sent
 // to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);

// Pass to next layer of middleware
next();
})

const taskController = require('./Controller/taskController');

app.post('/api/task/create', taskController.create);
app.post('/api/task/update', taskController.update);
app.delete('/api/task/delete', taskController.delete);
app.post('/api/task/login', taskController.login);

//Start Server
app.listen(3400, ()=> console.log("Server started on 3400"));