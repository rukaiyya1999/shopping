const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express()
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const stripeRoute = require('./routes/Stripe')
const cors = require('cors')

dotenv.config()
app.use(cors())

mongoose.connect(process.env.Mongo_Url)
.then(()=>console.log("successfully connected"))
.catch((error)=>console.log(error))

app.use(express.json())
app.use("/auth", authRoute);
app.use("/test", userRoute);
app.use("/products", productRoute);
app.use("/cart", cartRoute);
app.use("/order", orderRoute);

app.use("/checkout", stripeRoute);


app.listen(8000)