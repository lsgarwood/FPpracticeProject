const express = require('express');
const cors = require('cors');
const app = express();


const mongoose  = require('./database');
const citRoutes = require('./citRoutes');
// const addressRoutes = require('./Routes/addressRoutes');
// const bankaccountRoutes = require('./Routes/bankaccountRoutes');
// const phoneRoutes = require('./Routes/phoneRoutes');


app.use(cors());
app.use(express.json());
app.use('/citizen', citRoutes);
// app.use('/address', addressRoutes);
// app.use('/bankaccount', bankaccountRoutes);
// app.use('/mobile', phoneRoutes );




    app.use((err, req, res, next) => {
        console.log(err.stack);
        console.log("Post Error");
        next();
    });

    const server = app.listen(5015, () => {
        console.log(`Server started on port ${server.address().port}`);
    });