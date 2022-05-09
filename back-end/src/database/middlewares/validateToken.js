const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const SECRET = fs.readFileSync(path.resolve('jwt.evaluation.key'), 'utf-8');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const user = jwt.verify(authorization, SECRET);

    if (user) {
      req.user = user;
    }
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

module.exports = { validateToken };
