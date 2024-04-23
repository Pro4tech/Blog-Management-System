const express = require('express')
const db = require('../db')
const config = require('../config')
const utils = require('../utils')
const crypto = require('crypto-js')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.get('/all', (request, response) => {
  const statement = `select user_id,full_name,email,password,phone_no from user`
  db.pool.execute(statement,(error, data) => {
    response.send(utils.createResult(error, data))
  }
  )
})
router.post('/register', (request, response) => {
  const { fullname, email, password, phone_no } = request.body
  const statement = `insert into user (full_name,email,password,phone_no) values(?,?,?,?)`
  const encryptedPassword = String(crypto.SHA256(password))
  db.pool.execute(
    statement, [fullname, email, encryptedPassword, phone_no], (error, data) => {
    response.send(utils.createResult(error, data))
  }
  )
})

router.post('/login', (request, response) => {
  console.log("Login")
  const { email, password } = request.body
  const statement = `select user_id,full_name,email,phone_no from user where email=? and password=?`
  const encryptedPassword = String(crypto.SHA256(password))
  db.pool.execute(
    statement, [email, encryptedPassword], (error, users) => {
    if (error) {
      response.send(utils.createErrorResult(error))
    } else {
      if (users.length == 0) {
        response.send(utils.createErrorResult('user does not exist'))
      } else {
        const user = users[0]
        // create the payload
        const payload = { id: user['user_id'] }
        const token = jwt.sign(payload, config.secret)
        const userData = {
          token,
          id:user['user_id'],
          name: `${user['full_name']}`
        }
        response.send(utils.createSuccessResult(userData))
      }
    }
  }
  )
})

module.exports = router