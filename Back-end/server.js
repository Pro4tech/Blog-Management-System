const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const app = express()
const userRouter = require('./routes/user')
const categoryRouter = require('./routes/category')
const blogRouter = require('./routes/blog')
app.use(express.json())
app.use(cors())

app.use('/user',userRouter)
app.use('/category',categoryRouter)
app.use('/blog', blogRouter)

app.listen(4000,'0.0.0.0',()=>
{
    console.log('server started on port 4000')
})