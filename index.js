const express = require('express');
const cors = require('cors');
const queryRoutes = require('./routes/queryRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello developer");
});

app.use('/query', queryRoutes);

app.listen(3000);