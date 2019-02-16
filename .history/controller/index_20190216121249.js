const fs = require('fs');
const path =require('path');

 class Index {
    constructor() {
        console.log(path);

        this.modifyhtml = this.modifyhtml.bind(this);
        this.__parentDir = path.dirname(module.parent.filename);
        console.log(this.__parentDir)
    }
    modifyhtml(req,res) {
        let userObj ={
            name: 'vdvsnraju@gmail.com',
           contact:'9703139753'
        }
        let html = fs.readFileSync('./templates/index1.html', "utf8");
        html = html.replace('{email}', userObj.name);
        html = html.replace('{contact}', userObj.contact);
        
        res.sendfile( html);
    }
}
module.exports = Index;