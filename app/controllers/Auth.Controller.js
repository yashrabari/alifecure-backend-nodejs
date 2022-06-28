const bcrypt = require('bcryptjs');
const { db } = require('../../helpers/mainHelper');


const AuthController = {
    login: async (req, res) => {

        //handle login logic here
        const { email, password } = req.body;

        if (email === '' || password === '' || email == undefined || password == undefined) {
            return res.status(400).json({
                message: 'Please enter email or password'
            })
        }

        db.query(`SELECT * FROM users WHERE email = '${email}'`, (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: 'Something went wrong'
                })
            }

            if (result.length === 0) {
                return res.status(400).json({
                    message: 'Email not found'
                })
            }

            const user = result[0];

            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    return res.status(500).json({
                        message: 'Something went wrong'
                    })
                }

                if (!isMatch) {
                    return res.status(400).json({
                        message: 'Password is incorrect'
                    })
                }

                return res.status(200).json({
                    message: 'Login successful',
                    user: user
                })
            })
        })
    },





    register: async (req, res) => {
        //handle register logic here
        const { email, password, name, username, country_id, city_id, state_id, role_id } = req.body;

        if (email === '' || password === '' || name === '' || username == "" || email == undefined || password == undefined || name == undefined || username == undefined) {
            return res.status(400).json({
                message: 'Please enter email, password and name'
            })
        }

        db.query(`SELECT * FROM users WHERE email = '${email}'`, (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: 'Something went wrong'
                })
            }

            if (result.length > 0) {
                return res.status(400).json({
                    message: 'Email already exists'
                })
            }

            bcrypt.hash(password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        message: 'Something went wrong'
                    })
                }

                db.query(`INSERT INTO users (email, password, name,username,country_id,city_id,state_id,role_id) VALUES ('${email}', '${hash}', '${name}', '${username}','${country_id}','${city_id}','${state_id}','${role_id}' )`, (err, result) => {
                    if (err) {
                        console.log(err);

                        return res.status(500).json({
                            message: 'Something went wrong'
                        })
                    }

                    return res.status(200).json({
                        message: 'Registration successful'
                    })
                })
            })
        })
    }   //end register




}

module.exports = AuthController;