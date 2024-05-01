const express=require('express');
const reviewsController=require('../controllers/reviewController.js')
const reviewRouter=express.Router();



reviewRouter.route('/:id')
.post(reviewsController.addReview)


module.exports=reviewRouter;
