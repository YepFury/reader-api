const connect = require('../connect');

const lately = (req, res) => {
    const userId = req.body.userId;
    const bookId = req.body.bookId;
    const chapterId = req.body.chapterId;
    connect(`SELECT * FROM lately_read WHERE userid='${userId}' AND book_id='${bookId}'`, function (err, results, fileds) {
        if (err) throw err;
        if (results.length > 0) {
            connect(`UPDATE lately_read SET chapter='${chapterId}' WHERE userid='${userId}' AND book_id='${bookId}';`, function (err, result, fields) {
                if (err) throw err;
                if (result.affectedRows === 1) {
                    res.send('修改成功')
                }
            })
        } else {
            connect(`INSERT INTO lately_read (userid, book_id, chapter) VALUES ('${userId}', '${bookId}', '${chapterId}');`, function (err, result, fields) {
                if (err) throw err;
                if (result.affectedRows === 1) {
                    res.send('插入成功')
                }
            })
        }
        // res.send(results[0])
    })
}

module.exports = lately;
