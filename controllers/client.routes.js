const router = require('express').Router()
const Client = require('../models/client')
const Session = require('../models/session')

router.get('/', async (req, res) => {
    const allClients = await Client.find()
    res.render('clients/all-clients.ejs', {allClients: allClients})
});

router.get('/new', (req, res) => {
    res.render('clients/new-client.ejs')
});

router.post('/', async (req, res) => {
    const newClient = await Client.create(req.body)
    res.redirect('/clients')
});

router.get('/:id', async (req, res) => {
    const foundClient = Client.findById(req.params.id)
});

router.post('/delete/:id', async (req, res) => {
    const deletedClient = Client.findByIdAndDelete(req.params.id)
    res.redirect('/clients')
})

module.exports = router