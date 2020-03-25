const { bling_api, apikey } = require('../../services/bling_api');
const { storePedidoNovo } = require('./XMLControllers');

const Deal = require('../models/Deal');

const qs = require('query-string');

class OrderController {
  async show(req, res) {
    const { data } = await bling_api.get(`pedidos/json&apikey=${apikey}`);
    const { pedidos } = data.retorno;
    res.json(pedidos);
  }

  async store(req, res) {
    const {
      nome_cliente,
      id_produto,
      descricao_produto,
      valor_produto,
      valor_parcela,
    } = req.body;

    var requestBody = {
      apikey,
      // Nome, id_produto, descrição produto, valor produto, valor parcela
      xml: storePedidoNovo(
        nome_cliente,
        id_produto,
        descricao_produto,
        valor_produto,
        valor_parcela
      ),
    };

    const config = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    };

    const { data } = await bling_api.post(
      'pedido/json',
      qs.stringify(requestBody),
      config
    );

    res.json(data);
  }
}

module.exports = new OrderController();
