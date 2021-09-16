import { omit } from 'lodash';

import loadUser from '../sharedFunctions/loadUser';
import extractClient from '../sharedFunctions/extractClient';

module.exports = {
  authorise(_, { user }, { cookies }) {
    return extractClient(cookies).then(client => {
      const loggedInUser = user || client;
      if (loggedInUser) return;
      throw new Error('Not authorised');
    });
  },
  exec({ $mongo }, { user }, { cookies }) {
    return extractClient(cookies).then(client => {
      const userId = user._id !== 'guest' ? user._id : client?._id;
      return loadUser(
        { $mongo },
        {
          _id: userId,
        },
        { password: 0 }
      ).then(_user => {
        if (!_user) throw new Error('No user found');
        return omit(_user, ['password']);
      });
    });
  },
};
