export default {
  position: 'top-center',
  register: [
    {
      name: 'editorSuccess',
      message: payload => {
        if (!payload) return 'Success';
        return payload;
      },
      options: {
        type: 'success',
        duration: 4000,
        keepOnHover: true,
      },
    },
    {
      name: 'editorError',
      message: err => {
        if (!err) return 'Unknown Error';
        return err;
      },
      options: {
        type: 'error',
        duration: 4000,
        keepOnHover: true,
      },
    },
  ],
};
