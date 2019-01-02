const connect = require('../connect');

const booktitles = (req, res) => {
    const id = req.query.id;

    connect(`SELECT * FROM booktitles WHERE id=${id};`, function (err, results, fields) {
        if (err) throw  err;
        res.send(results[0]);
    })
}

module.exports = booktitles
