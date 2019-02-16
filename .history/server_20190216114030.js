const express =  require('express')
const path =require('path');
const fs = require('fs');
const index = require('./controller/index');

class Example {
    constructor() {
        this.app = express();
        this.port = 8080;
    }

initialize(){

this.app.get('/', (req, res) =>  res.sendFile(path.join(__dirname + '/templates/index.html')));


this.app.listen(this.port, () => console.log(`Example app listening on port ${this.port}!`))

}
}
const Example = new Example();
Example.initialize();