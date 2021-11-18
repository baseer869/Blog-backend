// const sequelize = require('../config/db.config');
// const User = require('../models/user');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// require('dotenv')
// const secret = process.env.SECRET
// const salt = 10;

// // REGISTER
// module.exports.registerUser = async (req, res) => {

//     sequelize.sync().then(async () => {
//         let isRegister;
//         isRegister = await User.create({
//             fullname: req.body.fullname,
//             email: req.body.email,
//             passwordHash: bcrypt.hashSync(req.body.password, salt),
//             phone: req.body.phone,
//             cnic: req.body.cnic,
//             profession: req.body.profession,
//             status: req.body.status,
//         });
//         if (!isRegister) {
//             return res.status(400).send({
//                 message: 'unable to register, try again',
//                 code: 400,

//             });
//         }
//         return res.status(200).send({
//             message: 'register success',
//             code: 200,
//             isRegister
//         });
//     });
// };


// // LOGIN
// module.exports.loginUser = async (req, res) => {
//     sequelize.sync().then(async () => {

//         const user = await User.findOne({ where: { fullname: req.body.fullname } });
//         if (!user) {
//             return res.status(400).send({
//                 message: 'Invalid email or password',
//                 code: 401,
//             });

//         }
//         if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
//             const token = jwt.sign({ user: user.id }, secret, { algorithm: 'HS256' })
//             return res.status(200).send({

//                 message: 'login successfull',
//                 status: 200,
//                 user: {
//                     email: user.email,
//                     token: token
//                 }
//             });
//         }
//         return res.status(401).send({
//             message: 'Invalid email or password',
//             code: 401,
//         });

//     });
// };