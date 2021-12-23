const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

// connect mongoose
dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Connected to DB!'))
.catch((err) => {
    console.log(err)
})

const formSchema = new mongoose.Schema(
    {
        data: Object
    },
    {
        collection: 'Form'
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
app.listen(1999, () => {
    console.log('SERVER listening on PORT: http://localhost:1999')
})