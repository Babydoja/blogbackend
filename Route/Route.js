const mongoose = require('mongoose')
const express = require('express')
const Blog = require('../Model/Model')
const { createBlog, getAllBlog, getSingleBlog, editBlog, deleteBlog } = require('../Controller/Controller')
const router = express.Router()


router.post('/create_blog',createBlog)
router.get('/getall_blog',getAllBlog)
router.get('/getsingle_blog/:id',getSingleBlog)
router.put('/edit_blog/:id',editBlog)
router.delete('/delete_blog/:id',deleteBlog)

module.exports = router