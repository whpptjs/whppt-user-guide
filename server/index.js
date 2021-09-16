const express = require('express');
const Whppt = require('@whppt/api-express');
const sitemap = require('@whppt/sitemaps');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const genericPageType = require('../generic/pageType').default;
const clientPageType = require('../ClientPages/pageType').default;

const clientQueries = require('../ClientPages/lib/api/queries');
const clientCommands = require('../ClientPages/lib/api/commands');

const security = require('./security');

const { corsOptions } = require('./cors');

const options = {
  modules: {
    sitemap: { filter: sitemap.serverModule },
    client: { ...clientQueries, ...clientCommands },
  },
  security,
  pageTypes: [genericPageType, clientPageType],
};

const app = express();

app.get('/health', (_, res) => {
  res.sendStatus(200);
});

if (process.env.NODE_ENV !== 'development') app.use(cors(corsOptions()));

app.use(cookieParser());
// app.use(redirects);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  if (/\/{2,}/.test(req.url)) {
    const url = req.url.replace(/\/{2,}/g, '/');
    res.writeHead(301, { Location: url });
    return res.end();
  }
  next();
});

Whppt(options)
  .then(whppt => {
    app.use(whppt);
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.log('err', err);
    throw err;
  });

module.exports = app;
