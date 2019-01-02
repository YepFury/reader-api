const connect = require('../connect');

const search = (req, res) => {
    const keyword = req.query.keyword;
    connect(`SELECT * FROM booklist WHERE name LIKE "%${keyword}%" OR author LIKE "%${keyword}%";`, function (err, results, fileds) {
        if (err) throw err;
        res.send(results);
    })
}

module.exports = search;
