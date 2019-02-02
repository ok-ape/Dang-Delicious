const mongoose = require('mongoose')
const Store = mongoose.model('Store')

exports.homePage = (req, res) => {
    res.render('index')
}

exports.addStore = (req, res) => {
    res.render('editStore', { title: 'Add Stores' })
}

exports.createStore = async (req, res) => {
    const store = await (new Store(req.body)).save()
    req.flash('success', `Sucessfully saved ${req.body.name} to the database`)
    res.redirect('/')
}

exports.getStores = async (req, res) => {
    const stores = await Store.find()
    res.render('getStores', {
        title: 'Stores',
        stores
    })
}