const { Router } = require('express')
const passport = require('passport')
const mustLogin = require('../middlewares/mustLogin')
const router = Router()
const postLogin = require('../controllers/postLogin')
const scopeFacebook = ['email']
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination (req, file, next) {
    next(null, path.join(__dirname, '../public/book'))
  },
  filename (req, file, next) {
    next(null, file.originalname)
  }
})

const upload = multer({
  storage
  // dest: path.join(__dirname, '../public/book')
})

router.get('/', require('../controllers/index'))
router.post('/update-password', mustLogin, require('../controllers/updatePassword'))
router.get('/login', require('../controllers/getLogin'))
router.post('/login', postLogin('local'))
router.get('/login/facebook', passport.authenticate('facebook', { scope: scopeFacebook }))
router.get('/login/facebook/callback', postLogin('facebook'))
router.get('/login/google', passport.authenticate('google'))
router.get('/login/google/callback', postLogin('google'))
router.get('/register', require('../controllers/getRegister'))
router.post('/register', require('../controllers/postRegister'))
router.get('/logout', require('../controllers/logout'))
router.get('/user', mustLogin, require('../controllers/user'))
router.get('/book', mustLogin, require('../controllers/book'))
router.post('/bookcreate', mustLogin, upload.single('bookfile'), require('../controllers/bookcreate'))
router.get('/status', mustLogin, require('../controllers/status.js'))
router.get('/about', require('../controllers/about'))
router.get('/manage', require('../controllers/manage'))
module.exports = router
