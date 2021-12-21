import express from 'express'
const app = express()
import userRoute from './routes/user.js'
import morgan from 'morgan'

const PORT = 1999

// use morgan to see in4 requests
app.use(morgan('combined'))

// routing
app.get('/', (req, res) => {
    res.send('[HOME Route]')
})
app.use('/user', userRoute)

// server listening
app.listen(PORT, () => {
    console.log(`SERVER listening on PORT: http://localhost:${PORT}`)
})