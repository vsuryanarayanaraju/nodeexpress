const express =  require('express')
const path =require('path');
const fs = require('fs');
const index = require('./controller/index');

class Example {
    constructor() {
        this.app = express();
        this.port = 8080;
        this.index = new index();
    }

initialize(){

this.app.get('/', (req, res) =>  res.sendFile(path.join(__dirname + '/templates/index.html')));
this.app.get('/api/index',this.index.modifyhtml)

this.app.listen(this.port, () => console.log(`Example app listening on port ${this.port}!`))

}
}
const SampleExample = new Example();
SampleExample.initialize();