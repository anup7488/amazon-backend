const productModel = require("../models/productsModel.js");

const getAllProducts = async (req, res) => {
  const {sort='price',page=1,pageSize=3,fields='-info',...q}=req.query;  // jo chahiye wo alg kr lo baaki sbko q m daal do   
  // console.log(q,sort)
  let query= productModel.find(q);
  const sortStr=sort.split(',').join(' ');
  const fieldsStr=fields.split(',').join(' ');
    query=query.sort(sortStr)  // if price gets equal then then they will sort according to second parameter
    
    const skip=pageSize*(page-1);
    const limit=pageSize;
    
    query=query.skip(skip).limit(limit);  


    query=query.select(fieldsStr);



    const products=await query;

    const totalResults=await productModel.countDocuments();

  res.json({
    status: "success",
    result: products.length,
    data: {
      products,
    },
    totalResults ,
   page,
   pageSize,
  });
};

const addProduct = async (req, res) => {
  try {
    console.log(req.body);
    const{_id ,...reqData} =req.body; 
   const data= await productModel.create(reqData);
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


const  replaceProduct=async (req,res)=>{
    console.log(req.body)
    try{
        const reqId=req.params.id;
        
        const data={...req.body,_id:reqId};
        const result=await productModel.findOneAndReplace(
           { _id:reqId},
            data,
        ) ;
        res.json({
           status:"success",
           results:1,
           data:{
            products:result,
           } ,
        })
    }catch(err){
            res.json({
                status:"failed",
                message:"you have some error in replacing the data"
            });
    }
};


const deleteProduct=async (req,res)=>{
    console.log(req.body);
    try{       
         const reqId=req.params.id;
        const result=await productModel.findByIdAndDelete(
           { _id:reqId},
        //    data,

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
                message:"you have some error in replacing the data"
            });
    }
};
    

module.exports = {
  getAllProducts,
  addProduct,
  replaceProduct,
  deleteProduct,
};