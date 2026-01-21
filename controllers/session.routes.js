const router = require('express').Router()
const Client = require('../models/client')
const Session = require('../models/session')

router.get('/', async (req, res) => {
    const allSessions = await Session.find()
    res.render('sessions/all-sessions.ejs', {allSessions: allSessions})
});

router.get('/new', (req, res) => {
    res.render('sessions/new-session.ejs')
});

router.post('/', async (req, res) => {
    const newSession = await Session.create(req.body)
    res.redirect('/sessions')
});

router.get('/:id', async (req, res) => {
    const foundSession = await Session.findById(req.params.id)
    res.render('sessions/session-details.ejs', {foundSession: foundSession})
});

router.post('/delete/:id', async (req, res) => {
    const deleted = Session.findByIdAndDelete(req.params.id)
    res.redirect('/sessions')
})


module.exports = router