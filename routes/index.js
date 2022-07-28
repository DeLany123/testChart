var express = require('express');
var router = express.Router();
const path = require('path');

/* GET coins listing. */
router.get('/', async function(req, res, next) {
    const options = {
        root: path.join(__dirname + '/../views/')
    };
    const fileName = 'index.html';
    res.format({
        html: function() {
            res.sendFile(fileName, options, function (err) {
                if (err) {
                    next(err);
                    console.log('Err:', err);
                } else {
                    console.log('Sent:', fileName);
                    next();
                }
            });
        },
        json: function() {
            // lijst van coinsymbolen
            res.send({});
            res.end();
        }
    })
});

module.exports = router;
