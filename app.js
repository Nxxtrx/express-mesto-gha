const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
  useNewUrlParser: true,
});

app.use((req, res, next) => {
  req.user = {
    _id: '648592c4f1807a6cdb795869',
  };

  next();
});

app.use(express.json());

app.use(router);

app.listen(3000);
