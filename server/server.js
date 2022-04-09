require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const routers = require('./routers')

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(routers)

app.listen(PORT, () => {
    console.log(`app listening on http://localhost:${PORT}`)
});