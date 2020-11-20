const path = require('path');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname)));
app.use(compression());
app.use(helmet());
app.use(cors());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port);