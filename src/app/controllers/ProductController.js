const { bling_api, apikey } = require('../../services/bling_api');
const { storeProdutoNovo } = require('./XMLControllers');
const qs = require('query-string');

class ProductController {
  // Get all Products
  async show(req, res) {
    const { data } = await bling_api.get(`produtos/json&apikey=${apikey}`);
    const { produtos } = data.retorno;
    return res.json(produtos);
  }

  // Store new Product
  async store(req, res) {
    const { descricao, variacao } = req.body;

    // Save XML template for post request
    var requestBody = {
      apikey,
      xml: storeProdutoNovo(descricao, variacao), // Descriçãop, Variação
    };

    // Set XML type
    const config = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    };

    // Store new product
    const { data } = await bling_api.post(
      'produto/json',
      qs.stringify(requestBody),
      config
    );

    res.json(data);
  }
}

module.exports = new ProductController();
