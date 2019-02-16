const express =  require('express')
const path =require('path');
const app = express()
const port = 8080

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/index.html')));
app.get ('/api/user',(req, res) => res.send(`<h1>raju</h1>`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

