export default {
  csp: {
    hashAlgorithm: 'sha256',
    policies: {
      'script-src': [
        "'unsafe-inline'",
        'https://www.google-analytics.com',
        'https://polyfill.io',
        'https://static.dashlane.com',
        'https://www.google.com',
        'https://www.gstatic.com',
        'https://maps.googleapis.com',
        'https://www.googletagmanager.com',
        'https://connect.facebook.net',
      ],
      'frame-ancestors': ["'none'"],
    },
  },
};
