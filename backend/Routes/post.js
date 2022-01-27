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
        if(req.body.cat){
            const posts=await Post.find({category:req.body.cat});
            res.status(200).json(posts);
        }else{
            const posts=await Post.find();
            res.status(200).json(posts);
            
        }
      
    } catch (error) {
        res.status(5000).json(error);
    }
});

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

module.exports=router;