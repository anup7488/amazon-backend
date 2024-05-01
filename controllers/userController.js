const userModel = require('../models/userModel.js');


const getUsers = async (req, res)=>{
    const data = await userModel.find();
    // console.log(data);
// console.log(req.url);

res.json({
    status:'success',
    results:data.length,
    data:{
        user:data,
    }
})
}

const addUser = async(req, res)=>{
   try{
    const{_id ,...reqData} =req.body; 
    const data= await userModel.create(reqData);
    // console.log(data);
    res.json({
        status: "success",
        results: 1,
        data: {
          products: data,
        },
      });
    } catch (err) {
      res.status(403)
      console.log(err);
      res.json({
          status: "failed",
          Message: JSON.stringify(err),
    });
  };
  }

const replaceUser = async(req, res)=>{
    
    
    try{
        const reqId = req.params.id;
    const data = {...req.body, reqId};
    const rest = await userModel.findOneAndReplace({_id:reqId,},req.body);
    res.json({
        status:'success',
        results:1,
        data:{
            user:rest,
        }
    })

}

catch(err){
    res.status(403);
    res.json({
        status:'Fail',
        message:JSON.stringify(err),
        
});
}
}


const deleteUser =async(req, res)=>{

try{       
    const reqId=req.params.id;
   const result=await productModel.findByIdAndDelete(
      { _id:reqId},
     ) ;
   res.json({
      status:"----successfully deleted---",
      results:1,
      data:{
       products:result,
      } ,
   })
}catch(err){
       res.json({
           status:"failed",
           message:"you have some error in replacing the user"
       });
}
};


module.exports = {
    getUsers,
    addUser,
    replaceUser,
    deleteUser,
}