const router=require('express').Router();
const Post=require('../Model/Post');
const path=require('path');
const multer=require("multer");

const storage=multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'./upload/images')
        },
        filename:(req,file ,cb)=>{
                cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
        }
});

const upload=multer({storage:storage})


router.post('/upload',upload.single('image'),async(req,res)=>{
   try {
       
        const newPost=new Post({
            title:req.body.title,
            desc:req.body.desc, 
            image:`http://localhost:5000/${req.file.path}`,
            category:req.body.category
        });

        const user=await newPost.save();
        res.status(200).json(user);
   } catch (error) {
       res.status(500).json(error);
   }
})

router.get('/all-post' ,async(req,res)=>{
    try {
        if(req.body.category){
            const posts=await Post.find({category:req.body.category});
            res.status(200).json(posts);
        }else{
            const posts=await Post.find();
            res.status(200).json(posts);
            
        }
      
    } catch (error) {
        res.status(5000).json(error);
    }
});

router.get('/category',async(req,res)=>{
    if(req.body.category){
        try {
            const post=await Post.find({category:req.body.category});
            res.status(200).json(post);
            
        } catch (error) {
            res.status(500).json(error)
        }
    }else{
        res.status(404).json("Posts are not Available !")
    }
})
router.get('/post-view/:id',async(req,res)=>{
    if(req.params.id){
        try {
            const posts=await Post.findById(req.params.id);
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json(error);
        }
    }else{
        res.status(404).json("User Does not exist !")
    }
})
router.delete('/remove/:id',async(req,res)=>{
    try {
       const deletePost=await Post.findByIdAndDelete(req.params.id);
       res.status(200).json(deletePost);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.put('/update/:id',async(req,res)=>{
    try {
        const updateUser=await Post.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body
            },
            {
                new:true
            }
        );

        res.status(200).json(updateUser);
        
    } catch (error) {
        res.status(500).json(error);
    }
})
module.exports=router;