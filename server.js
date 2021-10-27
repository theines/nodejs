const express = require('express')
const app = express() 

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
//app.user(express.json())

app.set('view engine', 'ejs')

//linking the users route that I just made
const userRouter = require('./routes/users')
app.use('/users', userRouter)//위의 위치에 있는 파일 앞에 /users가 자동으로 붙게




app.listen(3000)
 