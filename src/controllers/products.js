const ProductModel = require('../models/products');

const getAllProducts = async (req, res) => {
    const { featured, price, title, sort, select } = req.query;
    const queryObj = {};

    if (featured) {
        queryObj.featured = featured;
    }

    if (price) {
        queryObj.price = price;
    }

    if (title) {
        queryObj.title = { $regex: title, $options: 'i' };
    }

    // understand the flow: why it is not undefined
    let apiResult = ProductModel.find(queryObj);

    if (sort) {
        let sortFix = sort.split(',').join(" ");
        apiResult = apiResult.sort(sortFix);
    }

    if (select) {
        let selectFix = select.split(',').join(" ");
        apiResult = apiResult.select(selectFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 8;

    let skip = (page - 1) * limit;

    apiResult = apiResult.skip(skip).limit(limit);

    const productsData = await apiResult;
    res.status(200).json({ productsData, nbHits:  productsData.length});
};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "Lalalal Testing" });
};

module.exports = { getAllProducts, getAllProductsTesting };