const connect = require('../connect');

const login = (req, res) => {
    const user = req.body.user;
    const pwd = req.body.pwd;

    connect(`SELECT * FROM users WHERE user_name="${user}" AND password="${pwd}";`, function (err, results, fileds) {
        if (err) throw err;
        if(results.length === 1) {
            connect(`SELECT * FROM user_info WHERE user="${user}";`, function (err, results, fileds) {
                if (err) throw err;
                if(results.length === 1) {
                    res.send(results[0])
                }
                else {
                    res.send(false)
                }
            })
        }
        else {
            res.send(false)
        }
    })

}

module.exports = login;
