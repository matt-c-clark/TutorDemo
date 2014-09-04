var express = require('express');
var router = express.Router();

/*
 * GET studentlist
 */
router.get('/studentlist', function(req, res) {
    var db = req.db;
    db.collection('studentlist').find().toArray(function (err, items) {
        res.json(items);
    });
});

/*
 * GET tutorlist
 */
router.get('/tutorlist', function(req, res) {
    var db = req.db;
    db.collection('tutorlist').find().toArray(function (err, items) {
        res.json(items);
    });
});

/*
 * POST to addtutor.
 */
router.post('/addtutor', function(req, res) {
    var db = req.db;
    db.collection('tutorlist').insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

module.exports = router;
