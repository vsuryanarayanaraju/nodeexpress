const express =  require('express')
const path =require('path');
const fs = require('fs');
const app = express();
const port = 8080
console.log((path.join(__dirname + '/templates/index.html')));
app.get('/', (req, res) =>  res.sendFile(path.join(__dirname + '/templates/index.html')));
app.get ('/api/user',(req, res) => res.send(`<h1>raju</h1>`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

