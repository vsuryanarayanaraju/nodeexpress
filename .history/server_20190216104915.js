const express =  require('express')
const app = express()
const port = 8080

app.get('/', `<h1>Surya</h1>`)
app.get ('/api/user', `<h1>raju</h1>` )

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

