const connect = require('../connect');

const late = (req, res) => {
    const userId = req.query.userId;
    const bookId = req.query.bookId;
    connect(`SELECT * FROM lately_read WHERE userid='${userId}' AND book_id='${bookId}'`, function (err, results, fileds) {
        if (err) throw err;
        if(results.length>0) {
            res.send(results[0]);
        }else {
            res.send(false);
        }
    })
}

module.exports = late;
