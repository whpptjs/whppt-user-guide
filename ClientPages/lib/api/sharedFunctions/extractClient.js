const jwt = require('jsonwebtoken');

const key = process.env.JWT_SECRET;

// TODO: Why doesn't this work as middleware?
module.exports = cookies => {
  return new Promise((resolve, reject) => {
    const { docsAuthToken } = cookies;

    if (!docsAuthToken) resolve('');

    jwt.verify(docsAuthToken, key, function (err, decoded) {
      if (err) reject(err);
      resolve(decoded?.sub);
    });
  });
};
