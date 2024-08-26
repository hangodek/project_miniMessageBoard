const express = require('express');
const app = express();
const path = require('node:path');
const userRoutes = require('./routes/userRoutes')

const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}));

app.use('/', userRoutes);


app.listen(process.env.port || PORT, () => console.log(`The server has been runned on port: ${process.env.port || PORT}`));