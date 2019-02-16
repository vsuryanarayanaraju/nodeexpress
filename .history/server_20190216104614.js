const express =  require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => `<h1>Surya</h1>`)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

