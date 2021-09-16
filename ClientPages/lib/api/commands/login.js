const assert = require('assert');
const pick = require('lodash/pick');
const loadUser = require('../sharedFunctions/loadUser');

module.exports = {
  exec({ $mongo, $security }, { username, password }) {
    assert(username, 'A username is required.');
    assert(password, 'A password is required.');
    return loadUser({ $mongo }, { username }).then(user => {
      if (!user)
        return Promise.reject({
          status: 401,
          message: 'The password or username you entered is incorrect.',
        });
      return $security.compare(password, user.password).then(passwordMatches => {
        if (passwordMatches) return { token: $security.createToken(pick(user, ['_id', 'name', 'email', 'username'])) };
        return Promise.reject({
          status: 401,
          message: 'The password or username you entered is incorrect.',
        });
      });
    });
  },
};
