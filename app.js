const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./router/index')
const cors = require('cors')
app.use(cors());
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use('/node_modules', express.static('./node_modules'))
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(router)
app.listen(3000, () => {
    console.log('suc3000')
  })


