const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (!err.statusCode) {
    res.status(500).send({ message: 'На сервере произошла ошибка' });
  }
};

module.exports = errorHandler;
