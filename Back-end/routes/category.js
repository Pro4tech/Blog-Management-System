const express = require('express')
const db = require('../db')
const config = require('../config')
const utils = require('../utils')

const router = express.Router()

router.post('/add', (request, response) => {
    const { title, description } = request.body
    const statement = `insert into category (title,description) values(?,?)`
    db.pool.execute(
        statement, [title, description], (error, data) => {
        response.send(utils.createResult(error, data))
    }
    )
})

router.get('/display', (request, response) => {
    const statement = `select category_id, title,description from category `
    db.pool.execute(
        statement, (error, data) => {
        response.send(utils.createResult(error, data))
    }
    )
})

router.delete('/delete', (request, response) => {
    const { category_id } = request.body
    const statement1 = `delete from blogs where category_id=?`
    const statement2 = `delete from category where category_id=?`

    db.pool.execute(
        statement1,[category_id],(error, data) => {
    }
    )
    db.pool.execute(
        statement2,[category_id],(error, data) => {
        response.send(utils.createResult(error, data))
    }
    )
})

module.exports = router