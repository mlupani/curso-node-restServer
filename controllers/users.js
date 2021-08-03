const { response, request } = require('express')

const getUsers = (req = request, res = response) => {
    const { id, nombre = 'no name', apikey } = req.query;
    res.json({ msg:'Hello get - controller', id, nombre, apikey})
}

const postUsers = (req = request, res = response) => {
    const {nombre, edad} = req.body
    res.json({ msg:'Hello post - controller', nombre, edad})
}

const putUsers = (req = request, res = response) => {
    const { id } = req.params
    res.json({ msg:'Hello put - controller', id})
}

const patchUsers = (req = request, res = response) => {
    res.json({ msg:'Hello patch - controller'})
}

const deleteUsers = (req = request, res = response) => {
    res.json({ msg:'Hello delete - controller'})
}

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    patchUsers,
    deleteUsers
}