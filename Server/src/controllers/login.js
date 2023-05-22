const users=require('../utils/users.js');

const login=(req,res)=>{
    const {userName,password}=req.query;
    const user=users.find(user=>user.userName===userName&&user.password===password);
    if(user){
        res.status(200).json({access:true});
    }else{
        res.status(200).json({access:false})
    }
}
module.exports=login;