const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

const PORT = 1999

app.set('view engine', 'ejs')
app.use(express.static('views'))

// routing
app.get('/', (req, res) => {
    res.render('index')
})

// submit form
app.post('/', urlencodedParser, (req, res) => {
    console.log(req.body)
    res.render('success-page')
})

// server listening
app.listen(PORT, () => {
    console.log(`SERVER listening on PORT: http://localhost:${PORT}`)
})