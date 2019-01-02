const connect = require('../connect');

const book = (req, res) => {
    const book = req.query.book;
    const bookId = req.query.id;
    connect(`SELECT * FROM book${book} WHERE id=${bookId}`, function (err, results, fileds) {
        if (err) throw err;
        res.send(results[0])
    })
}

module.exports = book;
