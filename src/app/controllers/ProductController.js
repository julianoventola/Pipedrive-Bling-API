const { bling_api, apikey } = require('../../services/bling_api');
const { storeProdutoNovo } = require('./XMLControllers');
const qs = require('query-string');

class ProductController {
  async show(req, res) {
    const { data } = await bling_api.get(`produtos/json&apikey=${apikey}`);
    const { produtos } = data.retorno;
    res.json(produtos);
  }

  async store(req, res) {
    const { descricao, variacao } = req.body;

    var requestBody = {
      apikey,
      xml: storeProdutoNovo(descricao, variacao), // Descriçãop, Variação
    };

    const config = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    };

    const { data } = await bling_api.post(
      'produto/json',
      qs.stringify(requestBody),
      config
    );

    res.json(data);
  }
}

module.exports = new ProductController();
