const router = require("express").Router()
const Client = require('../models/client')
const Session = require('../models/session')

router.get('/',(req,res)=>{
    res.render('homepage.ejs')
})
module.exports = router;
