const dotenv = require('dotenv')
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
// const connectRedis = require('connect-redis')
const connectFlash = require('connect-flash')
// const redis = require('redis')
const passport = require('passport')
const app = express()
const bodyParser = require('body-parser')

dotenv.config()

mongoose.connect('mongodb+srv://Admin:Password@monkey.yasgbdt.mongodb.net/rusisthesis?retryWrites=true&w=majority')
// const RedisStore = connectRedis(session)
// const redisClient = redis.createClient({
//   legacyMode: true,
//   url: process.env.REDIS_URL
// })
// redisClient.connect().catch()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '../views'))

app.use(express.static(path.join(__dirname, '../public')))
require('./passport')
app.use(session({
  // store: new RedisStore({ client: redisClient }),
  cookie: {
    maxAge: 3000000
  },
  resave: false,
  rolling: true,
  saveUninitialized: false,
  secret: 'bTgLcVtaCQtK7G@'
}))
app.use(connectFlash())
app.use(passport.initialize())
app.use(passport.session())
app.use((req, res, next) => {
  res.locals.alertMessage = {
    err: req.flash('err'),
    success: req.flash('success')
  }
  next()
}
)
app.use(express.urlencoded({ extended: false }))
app.use(require('./router'))

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`server is start = http://localhost:${PORT}`)
})
