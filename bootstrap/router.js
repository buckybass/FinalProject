const { Router } = require('express')
const mustLogin = require('../middlewares/mustLogin')
const router = Router()
const postLogin = require('../controllers/postLogin')

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
router.get('/registerout', require('../controllers/getRegisterOut'))
router.get('/registerin', require('../controllers/getRegisterIn'))
router.post('/register', require('../controllers/postRegister'))
router.get('/logout', require('../controllers/logout'))
router.get('/user', mustLogin, require('../controllers/user'))
router.get('/book', mustLogin, require('../controllers/book'))
router.post('/bookcreate', mustLogin, upload.single('bookfile'), require('../controllers/bookcreate'))
router.get('/status', mustLogin, require('../controllers/status.js'))
router.get('/about', require('../controllers/about'))
router.get('/manageapprove', mustLogin, require('../controllers/manageapprove'))
router.get('/managecategory', mustLogin, require('../controllers/categorys/managecategory'))
router.post('/category/create', mustLogin, require('../controllers/categorys/addcategory'))
router.post('/category/update/:id', mustLogin, require('../controllers/categorys/editcategory'))
router.get('/category/delete/:id', mustLogin, require('../controllers/categorys/deletecategory'))
router.get('/manageteacher', mustLogin, require('../controllers/manageteacher'))
router.get('/manageuser', mustLogin, require('../controllers/manageuser'))
router.get('/search', require('../controllers/search'))
router.get('/book/detail/:id', require('../controllers/bookdetail'))
router.post('/teacher/create', mustLogin, require('../controllers/teachercreate'))
router.get('/book/approve/:id', mustLogin, require('../controllers/bookapprove'))
router.post('/book/refer/:id', mustLogin, require('../controllers/bookrefer'))
router.post('/book/dowload/:id', mustLogin, require('../controllers/bookdowload'))
router.get('/managedowload', mustLogin, require('../controllers/managedowload'))
router.get('/managerefer', mustLogin, require('../controllers/managerefer'))
router.get('/user/delete/:id', mustLogin, require('../controllers/deleteUser'))
router.get('/status/refer/:id', mustLogin, require('../controllers/statusrefer'))
router.get('/status/dowload/:id', mustLogin, require('../controllers/statusdowload'))
router.get('/teachers/delete/:id', mustLogin, require('../controllers/deleteteacher'))
module.exports = router
