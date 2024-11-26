
const Blog = require('../Model/Model')


// create blog
const createBlog = (async(req,res)=>{
   try {
    const blog = await Blog.create(req.body)
     res.status(200).json(blog)
   } catch (error) {
     res.status(500).json(error)
   }
})

// get all blog 
const getAllBlog =(async(req,res)=>{
    try {
        const blogs = await Blog.find()
        res.status(200).json(blogs)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }

})

// get a single blog
const getSingleBlog =(async(req,res)=>{
    try {
        const {id} = req.params;
        const blog = await Blog.findById(id)
        res.status(200).json(blog)
        if(!blog){
            return res.status(404).json(`No blog with that id :${id}`)
        }
    } catch (error) {
        res.status(500).json({msg:error.message})
    }

})

// edit blog
const editBlog = (async(req ,res)=>{
    try {
        const {id} = req.params;
        const blog = await Blog.findByIdAndUpdate(
            {_id:id},
            req.body,
            {
                new:true,
                runValidators:true
            }
        );
        if(!blog){
            return(
                res.status(500).json(`no blog found: ${id}`)
            )
        }
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
})


// Delete blog 
const deleteBlog =(async(req,res) =>{  
    try {
        const {id} =req.params 
       const blog = await Blog.findByIdAndDelete(id) 
       if (!blog) {
        return res.status(404).json(`no blog with this id:${id}`)
        
       }
       res.status(200).json(blog)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }

})


module.exports = {createBlog,getAllBlog,getSingleBlog,deleteBlog,editBlog}
