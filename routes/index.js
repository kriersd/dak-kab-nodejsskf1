const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {msg: "Hello Express! - Testing! 3"});
});

module.exports = router;