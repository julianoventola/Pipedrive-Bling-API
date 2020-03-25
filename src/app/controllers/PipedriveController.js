const pipedrive_api = require('../../services/pipedrive_api');
const OrderController = require('./OrderController');

class PipedriveController {
  // Get all oportunities in Pipedrive
  async show(req, res) {
    // Get all oportunities
    const { data } = await pipedrive_api.get();
    // Array to filter which data receive
    const oportunities = [];

    if (data.data) {
      data.data.forEach(client => {
        let {
          title,
          value,
          status,
          won_time,
          person_id: { name },
        } = client;
        oportunities.push({ title, value, status, won_time, name });
      });
    }
    return res.json(oportunities);
  }

  // Get all WON oportunities in Pipedrive and set a new Order in bling
  async index(req, res) {
    // Get all oportunities
    const { data } = await pipedrive_api.get();
    if (data.data) {
      data.data.forEach(async client => {
        // Find WON oportunities
        if (client.status == 'won') {
          const {
            title,
            value,
            person_id: { name },
            creator_user_id: { id },
          } = client;

          var nome_cliente = name;
          //var id_venda = Math.ceil(Math.random() * (1000 - 1) + 1);
          var id_venda = id + value;
          var descricao_produto = title;
          var valor_produto = value;
          var valor_parcela = value;

          // Create a new Order request in Bling
          await OrderController.store(
            nome_cliente,
            id_venda,
            descricao_produto,
            valor_produto,
            valor_parcela
          );
        }
      });
    }
    return res.json({ saved: true });
  }
}

module.exports = new PipedriveController();
