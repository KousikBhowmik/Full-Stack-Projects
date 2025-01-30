import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoutes.js'
import productRouter from './routes/productRoutes.js'

// App config

const app = express()
const port = process.env.PROT || 4000


// Middlewares 

app.use(express.json())
app.use(cors())
connectDB()
connectCloudinary()

// Api end points

app.use('/api/user', userRouter);
app.use('/api/product', productRouter)

app.get('/', (req, res) => {
    res.send("Api working")

})

app.listen(port, () => console.log(`Sever listening on PORT: ${port}`))