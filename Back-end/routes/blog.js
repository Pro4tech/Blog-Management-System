const express = require('express')
const db = require('../db')
const config = require('../config')
const utils= require('../utils')

const router = express.Router()

router.post('/create',(request,response)=>{
    const {title,content,user_id,category_id} = request.body
    const statement = `insert into blogs (title,content,user_id,category_id) values(?,?,?,?)`
    db.pool.execute(
        statement,[title,content,user_id,category_id],(error,data)=>
        {
            response.send(utils.createResult(error,data))
        }
    )
})

router.put('/edit',(request,response)=>{
    const {title,content,blog_id,category_id} = request.body
    const statement = `update blogs set title =?,content=?,category_id=? where blog_id=?`
    db.pool.execute(
        statement,[title,content,category_id,blog_id],(error,data)=>
        {
            response.send(utils.createResult(error,data))
        }
    )
})

router.post('/search',(request,response)=>{
    const {title} = request.body
    const statement = `select blog_id,title,content from blogs where title =? `
    db.pool.execute(
        statement,[title],(error,data)=>
        {
            response.send(utils.createResult(error,data))
        }
    )
})
router.post('/id',(request,response)=>{
    const {id} = request.body
    const statement = `select blog_id,title,content,category_id from blogs where blog_id =? `
    db.pool.execute(
        statement,[id],(error,data)=>
        {
            response.send(utils.createResult(error,data))
        }
    )
})

router.post('/user',(request,response)=>{
    const {user_id} = request.body
    const statement = `select blog_id,title,content from blogs where user_id =? `
    db.pool.execute(
        statement,[user_id],(error,data)=>
        {
            response.send(utils.createResult(error,data))
        }
    )
})

router.delete('/delete',(request,response)=>{
    const {blog_id} = request.body
    const statement = `delete from blogs where blog_id=? `
    db.pool.execute(
        statement,[blog_id],(error,data)=>
        {
            response.send(utils.createResult(error,data))
        }
    )
})
router.get('/view',(request,response)=>{
      const statement = `select blog_id,title,content from blogs`
    db.pool.execute(
        statement,(error,data)=>
        {
            response.send(utils.createResult(error,data))
        }
    )
})

router.get('/display',(request,response)=>{
        const statement = `select category_id, title,description from category `
    db.pool.execute(
        statement,(error,data)=>
        {
            response.send(utils.createResult(error,data))
        }
    )
})

router.post('/create',(request,response)=>{
    const {} = request.body
    const statement = `insert into blog (title,content) values(?,?)`
    db.pool.execute(
        statement,[title,content,],(error,data)=>
        {
            response.send(utils.createResult(error,data))
        }
    )
})

router.get('/display',(request,response)=>{
        const statement = `select category_id, title,description from category `
    db.pool.execute(
        statement,(error,data)=>
        {
            response.send(utils.createResult(error,data))
        }
    )
})

module.exports= router