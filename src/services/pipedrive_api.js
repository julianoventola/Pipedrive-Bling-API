const axios = require('axios');

const pipedrive_api = axios.create({
  baseURL:
    'https://julianoventola.pipedrive.com/v1/deals?limit=500&api_token=712daf7d0ff592469adcd41aa8b07dcef09a88d0',
});

module.exports = pipedrive_api;
