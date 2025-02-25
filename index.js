const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const app = express()
require('dotenv').config()
const userRoute = require('./routes/userRoute')

const port = process.env.PORT || 5001
console.log(port)


//middleware
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    return res.send("Server is running...")
})

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected...')
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}
connectDB()



//routes
app.use('/api', userRoute)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})