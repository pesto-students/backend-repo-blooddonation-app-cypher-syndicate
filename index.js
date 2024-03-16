require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
// const apiRouter = require('./src/routes/routes');
const {sequelize, connectDB} = require('./src/database/db');
const app = express();

app.use(express.json());
app.use(cors());
// app.use('/api', apiRouter);
const PORT = process.env.PORT || 3000;

//routers
const userRouter = require('./src/routes/users');
const planRouter = require('./src/routes/plans');
app.use('/api/users', userRouter);
app.use('/api/plans', planRouter);

app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello Sadanand Pamadi11111'});
});

// app.post('/login', (req, res) => {
//     //Authenticate User
//     console.log('Login Route Hit');
//     const userName = req.body.username;
//     const user = {
//         name: userName
//     };
//     const accessToken = generateAccessToken(user);
//     const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN);
//     res.json({accessToken: accessToken, refreshToken: refreshToken});
// });

// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];
//     if (token == null) return res.sendStatus(401);
//     jwt.verify(token, process.env.SECRET_TOKEN_KEY, (err, user) => {
//         if (err) return res.sendStatus(403);
//         req.user = user;
//         next();
//     });
//     console.log('tokennnn', token);
// }

// function generateAccessToken(user) {
//     const accessToken = jwt.sign(user, process.env.SECRET_TOKEN_KEY, {
//         expiresIn: '10m'
//     });
//     return accessToken;
// }

app.listen(PORT, async () => {
    console.log(`Wow...! Sever started at ${PORT}`);
    await connectDB();
});
