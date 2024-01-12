const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const path = require('path');

// Set the directory where your HTML file is located
const publicDirectoryPath = path.join(__dirname, 'public');

// Serve static files from the 'public' directory
app.use(express.static(publicDirectoryPath));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json())
app.get("/",(req,res)=>{
  res.sendFile(path.join(publicDirectoryPath, 'todo.html'));
})

app.listen(process.env.PORT || 4000,()=>console.log("server on " + process.env.PORT));