var express = require("express");
var router = express.Router();
let Product = require("../Models/ProductSchema");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("hello");
});

router.post("/get_pages_productes", function (req, res, next) {
  if (req.body.category == "All") {
    Product.find({}, (err, docs) => {
      if (err) res.json(err);
      else res.json({ product: docs });
    })
      .limit(req.body.limit)
      .skip(req.body.limit * req.body.currentPage);
  } else {
    Product.find({ category: req.body.category }, (err, docs) => {
      if (err) res.json(err);
      else res.json({ product: docs });
    })
      .limit(req.body.limit)
      .skip(req.body.limit * req.body.currentPage);
  }
});

router.post("/get_product_view", function (req, res, next) {
  Product.findOne({ id: req.body.id }, (err, docs) => {
    if (err) res.json(err);
    else res.json({ product: docs });
  });
});

router.post("/get_product_with_category_forpages", function (req, res, next) {
  if (req.body.category == "All") {
    Product.find({}, (err, docs) => {
      if (err) res.json(err);
      else res.json({ product: docs });
    });
  } else {
    Product.find({ category: req.body.category }, (err, docs) => {
      if (err) res.json(err);
      else res.json({ product: docs });
    });
  }
});

router.post("/get_product_with_category", function (req, res, next) {
  let query = {};
  if (req.body.category !== "All") {
    query.category = req.body.category;
  }

  Product.find(query, (err, docs) => {
    if (err) res.json(err);
    else res.json({ product: docs });
  }).limit(req.body.limit);
});

router.post("/search_product", function (req, res, next) {
  Product.find({ name: req.body.name }, (err, docs) => {
    if (err) res.json(err);
    else res.json({ product: docs });
  });
});

module.exports = router;
