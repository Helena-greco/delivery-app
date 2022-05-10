const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use('/images', express.static(path.resolve('public')));
app.use(cors());

const loginRouter = require('../routes/loginRoute');
const registerRouter = require('../routes/registerRoute');
const productRouter = require('../routes/productRoute');
const userRouter = require('../routes/userRoute');

app.use('/login', loginRouter.router);
app.use('/register', registerRouter.router);
app.use('/customer', productRouter.router);
app.use('/sellers', userRouter.router);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
