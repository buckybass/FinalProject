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
})

router.get('/', require('../controllers/index'))
router.post('/update-password', mustLogin, require('../controllers/updatePassword'))
router.get('/login', require('../controllers/getLogin'))
router.post('/login', postLogin('local'))
router.get('/login/facebook', passport.authenticate('facebook', { scope: scopeFacebook }))
router.get('/login/facebook/callback', postLogin('facebook'))
router.get('/login/google', passport.authenticate('google'))
router.get('/login/google/callback', postLogin('google'))
router.get('/registerout', require('../controllers/getRegisterOut'))
router.get('/registerin', require('../controllers/getRegisterIn'))
router.post('/register', require('../controllers/postRegister'))
router.get('/logout', require('../controllers/logout'))
router.get('/user', mustLogin, require('../controllers/user'))
router.get('/book', mustLogin, require('../controllers/book'))
router.post('/bookcreate', mustLogin, upload.single('bookfile'), require('../controllers/bookcreate'))
router.get('/status', mustLogin, require('../controllers/status.js'))
router.get('/about', require('../controllers/about'))
router.get('/managebook', mustLogin, require('../controllers/managebook'))
router.get('/managefac', mustLogin, require('../controllers/faculty/managefac'))
router.post('/addfaculty', mustLogin, require('../controllers/faculty/addfaculty'))
router.post('/editfaculty/:id', mustLogin, require('../controllers/faculty/editfaculty'))
router.get('/deletefaculty/:id', mustLogin, require('../controllers/faculty/deletefaculty'))
router.get('/manageteacher', mustLogin, require('../controllers/manageteacher'))
router.get('/manageuser', mustLogin, require('../controllers/manageuser'))
router.get('/search', require('../controllers/search'))
router.get('/book/detail/:id', require('../controllers/bookdetail'))
router.post('/teacher/create', mustLogin, require('../controllers/teachercreate'))
router.get('/book/approve/:id', mustLogin, require('../controllers/bookapprove'))
router.post('/book/refer/:id', mustLogin, require('../controllers/bookrefer'))
router.post('/book/dowload/:id', mustLogin, require('../controllers/bookdowload'))
router.get('/managedowload', mustLogin, require('../controllers/managedowload'))
module.exports = router
