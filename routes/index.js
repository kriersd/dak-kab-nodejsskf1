const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {msg: "Hello Express! - Testing! 2"});
});

module.exports = router;