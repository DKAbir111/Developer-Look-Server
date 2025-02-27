const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const app = express()
const cookieParser = require('cookie-parser')
require('dotenv').config()
const userRoute = require('./routes/userRoute')
const todosRoute = require('./routes/todosRoute')

const port = process.env.PORT || 5001



//middleware
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://todo-app-10423.web.app",
            "http://localhost:4173",
        ],
        credentials: true,
    })
);
app.use(express.json())
app.use(cookieParser())
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
app.use('/api', todosRoute)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})