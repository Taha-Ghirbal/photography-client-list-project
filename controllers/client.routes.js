const router = require('express').Router()
const Client = require('../models/client')
const Session = require('../models/session')
const isSignedIn = require("../middleware/is-signed-in.js");


router.get('/', async (req, res) => {
    const allClients = await Client.find()
    res.render('clients/all-clients.ejs', {allClients: allClients})
});

router.use(isSignedIn)

router.get('/new', (req, res) => {
    res.render('clients/new-client.ejs')
});

router.post('/', async (req, res) => {
    const newClient = await Client.create(req.body)
    res.redirect('/clients')
});

router.get('/:id', async (req, res) => {
    const foundClient = await Client.findById(req.params.id)
    res.render('clients/client-details.ejs', {foundClient: foundClient})
});

router.get('/update/:id', async (req, res) => {
    const foundClient = await Client.findById(req.params.id)
    res.render('clients/update-client.ejs', {foundClient: foundClient})
});

router.post('/update/:id', async (req, res) => {
    const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/clients')
});

router.post('/delete/:id', async (req, res) => {
    const deletedClient = await Client.findByIdAndDelete(req.params.id)
    res.redirect('/clients')
});

module.exports = router