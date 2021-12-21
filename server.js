const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const url = 'mongodb+srv://uyenfam9x:ctQSfeHAJm6O58XL@cluster0.261zk.mongodb.net/DB_INTERACTION?retryWrites=true&w=majority'
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const formSchema = new mongoose.Schema(
    {
        data: Object
    },
    {
        collection: "Form"
    }
)

const Form = mongoose.model('Form', formSchema)

const formData = (bodyData) => {
    Form({ data: bodyData }).save((err) => {
        if(err) {
            throw err
        }
    })
}

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
    formData(req.body)
    res.render('success-page')
})

// server listening
app.listen(PORT, () => {
    console.log(`SERVER listening on PORT: http://localhost:${PORT}`)
})