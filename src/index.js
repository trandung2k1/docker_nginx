const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const port = +(process.env.PORT || '4000');
const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false, limit: '10mb' }));
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.get('/', function (req, res) {
    return res.send('<h1>Hi</h1>');
});
app.listen(port, function () {
    console.log(`Server listening on http://localhost:${port}`);
});
