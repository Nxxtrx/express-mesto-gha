const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');

const extractBearerToken = (header) => header.replace('jwt=', '');

const auth = (req, res, next) => {
  const { cookie } = req.headers;

  if (!cookie || !(cookie.startsWith('jwt='))) {
    throw new UnauthorizedError('Необходима авторизация');
  }

  const token = extractBearerToken(cookie);
  let payload;

  try {
    payload = jwt.verify(token, 'SUPER_PASSWORD');
  } catch (err) {
    throw new UnauthorizedError('Необходима авторизация');
  }

  req.user = payload;

  return next();
};

module.exports = { auth };
