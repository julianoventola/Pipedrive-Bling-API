const axios = require('axios');

const apikey =
  'e7f88d78ab974402a9f46058e33412aaf312a9767e08ec4d52eeb2e6df5226cbacbd595e';

const bling_api = axios.create({
  baseURL: 'https://bling.com.br/Api/v2/',
});

module.exports = { bling_api, apikey };
