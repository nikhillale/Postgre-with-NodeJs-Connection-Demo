const express = require('express')
const bodyParser = require('body-parser');
const db = require('./connection');
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

app.get('/',db.getUsers);