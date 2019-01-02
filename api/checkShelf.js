const connect = require('../connect');

const checkShelf = (req, res) => {
    const userId = req.query.userId;
    const bookId = req.query.bookId;
    connect(`SELECT * FROM bookshelf WHERE userid=${userId} AND bookid=${bookId}`, function (err, results, fileds) {
        if (err) throw err;
        if (results.length === 1) {
            res.send(true)
        }
        else {
            res.send(false)
        }
    })
}

module.exports = checkShelf;
