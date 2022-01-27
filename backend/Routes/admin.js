const router=require("express").Router();
const bcrypt=require("bcrypt");
const User=require('../Model/User');



router.get('/register' ,async(req,res)=>{
    try {

        const salt=await bcrypt.genSalt(10);
        const hasedPassword=await bcrypt.hash(req.body.password,salt);

       const newUser=new User({
           username:req.body.username,
           password:hasedPassword
       });
       
       const user=await newUser.save();
       res.status(200).json(user);
       
        
    } catch (error) {
        res.status(500).json(error);
    }
})


router.post('/login',async(req,res)=>{
    try {

        const user=await User.findOne({username:req.body.username});
        !user && res.status(404).json("User does not exits !");

        const validate=await bcrypt.compare(req.body.username,user.password);
        !validate && res.status(500).json("Username and password doesn't match !");

        const {password,...others}=user._doc;
        res.status(200).json(others);

    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports=router;