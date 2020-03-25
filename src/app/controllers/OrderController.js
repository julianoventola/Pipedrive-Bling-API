const { bling_api, apikey } = require('../../services/bling_api');
const { storePedidoNovo } = require('./XMLControllers');
const qs = require('query-string');

class OrderController {
  // Get all orders requested
  async show(req, res) {
    const { data } = await bling_api.get(`pedidos/json&apikey=${apikey}`);
    const { pedidos } = data.retorno;
    res.json(pedidos);
  }

  // Store a new order requested - (NOT A ROUTE JUST A FUNCTION)
  async store(
    nome_cliente,
    id_venda,
    descricao_produto,
    valor_produto,
    valor_parcela
  ) {
    // Save XML template for post request
    var requestBody = {
      apikey,
      // Nome, id de venda(integer), descrição produto, valor produto(float), valor parcela(float)
      xml: storePedidoNovo(
        nome_cliente,
        id_venda,
        descricao_produto,
        valor_produto,
        valor_parcela
      ),
    };

    // Set XML type
    const config = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    };

    // Store new Order
    await bling_api.post('pedido/json', qs.stringify(requestBody), config);
  }
}

module.exports = new OrderController();
