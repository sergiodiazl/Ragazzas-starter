const contentful = require('contentful');
const manifestConfig = require('./manifest-config');
require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID, DETERMINISTIC } = process.env;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

const plugins = [
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Amatic SC', 'Cabin', 'Open Sans'],
      },
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: manifestConfig,
  },
  'gatsby-plugin-styled-components',
  {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: SPACE_ID,
      accessToken: ACCESS_TOKEN,
    },
  },
  'gatsby-transformer-remark',
  'gatsby-plugin-offline',
  {
    resolve: 'gatsby-plugin-preconnect',
    options: {
      domains: [
        'https://use.fontawesome.com',
        'https://fonts.gstatic.com',
        'https://i.scdn.co',
        'https://open.scdn.co',
        'https://www.googletagmanager.com',
        'https://fonts.googleapis.com',
        'https://www.google-analytics.com',
      ],
    },
  },
];

module.exports = client.getEntries().then(() => {
  if (ANALYTICS_ID) {
    plugins.push({
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: ANALYTICS_ID,
      },
    });
  }

  return {
    siteMetadata: {
      deterministicBehaviour: !!DETERMINISTIC,
    },
    plugins,
  };
});
