const connect = require('../connect');

const shelf = (req, res) => {
    const userId = req.query.userId;
    console.log(req.query.userId);
    connect(`SELECT * FROM bookshelf WHERE userid=${userId}`, function (err, results, fileds) {
        if (err) throw err;
        res.send(results)
    })
}

module.exports = shelf;
