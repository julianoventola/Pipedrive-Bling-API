const { bling_api, apikey } = require('../../services/bling_api');
const { storePessoaFisica } = require('./XMLControllers');
const qs = require('query-string');

class ClientController {
  // Get all Contacts
  async show(req, res) {
    const { data } = await bling_api.get(`contatos/json&apikey=${apikey}`);
    const { contatos } = data.retorno;
    res.json(contatos);
  }

  // Store new Client
  async store(req, res) {
    const { nome, cpf } = req.body;

    // Save XML template for post request
    var requestBody = {
      apikey,
      xml: storePessoaFisica(nome, cpf), // Nome, CPF
    };

    // Set XML type
    const config = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    };

    // Store new client
    const { data } = await bling_api.post(
      'contato/json',
      qs.stringify(requestBody),
      config
    );

    res.json(data);
  }
}

module.exports = new ClientController();
