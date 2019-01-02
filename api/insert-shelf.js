const connect = require('../connect');

const inShelf = (req, res) => {
    const userId = req.body.userId;
    const sql = `INSERT INTO \`books\`.\`bookshelf\`(\`userid\`, \`bookid\`, \`bookname\`, \`author\`, \`images\`, \`wordcount\`, \`type\`, \`intro\`, \`serialize\`) 
    VALUES ('${userId}','${req.body['userInfo[id]']}','${req.body['userInfo[name]']}','${req.body['userInfo[author]']}','${req.body['userInfo[images]']}','${req.body['userInfo[wordcount]']}','${req.body['userInfo[type]']}','${req.body['userInfo[intro]']}','${req.body['userInfo[serialize]']}');`

    connect(sql, function (err, results, fileds) {
        if (err) throw err;
        if (results.affectedRows === 1) {
            res.send(true)
        } else {
            res.send(false)
        }
    })

}

module.exports = inShelf;
