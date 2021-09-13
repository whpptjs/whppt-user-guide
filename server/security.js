module.exports = {
  provider: 'jwt',
  jwt: {
    secret: process.env.JWT_SECRET,
    issuer: 'whppt-playground',
    audience: 'whppt-playground.com',
  },
};
