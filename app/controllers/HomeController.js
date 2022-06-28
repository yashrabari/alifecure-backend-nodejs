const { db } = require('../../helpers/mainHelper')


const HomeController = {


    getHomeRequest: async (req, res) => {

        try {
            db.query('SELECT * FROM users', (err, result, fields) => {
                if (err) {
                    console.log(err);
                    res.status(500).send(err);
                } else {
                    res.status(200).send(result);
                }
            }
            );
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    }

}

module.exports = HomeController;