module.exports = {
  provider: 'jwt',
  jwt: {
    secret: process.env.JWT_SECRET,
    issuer: 'whppt-user-guide',
    audience: 'guide.whppt.org',
  },
};
