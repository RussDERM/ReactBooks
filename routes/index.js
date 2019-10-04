const router = require("express").Router();
const bookAPIroutes = require("./books");

router.use("/books", bookAPIroutes);

module.exports = router;
