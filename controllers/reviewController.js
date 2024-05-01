const reviewModel = require("../models/reviewModel.js");

const addReview = async (req, res) => {
  try {
    const productId = req.params.id;

    const { _id, ...reqData } = req.body;

    console.log(productId,req.body.userId)
    let query = reviewModel.find({ productId });

    const result = await query.find({ userId: reqData.userId });
    console.log(result);
    if (result.length > 0) {
      res.status(403);
      console.log("----user already exists----");
      res.json({
        status: "failed",
      });
    } else {
      const data = await reviewModel.create(
        {
          reqData,
          productId,
    });
      // const data = [];
      res.json({
        status: "success",
        results: 1,
        data: {
          products: reqData,
        },
      });
    }
  } catch (err) {
    res.status(403);
    console.log(err);
    res.json({
      status: "failed",
      Message: JSON.stringify(err),
    });
  }
};

module.exports = { addReview };