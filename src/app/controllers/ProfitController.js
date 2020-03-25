const { bling_api, apikey } = require('../../services/bling_api');
const { format } = require('date-fns');

const Deal = require('../models/Deal');

class ProfitController {
  async oportunities(req, res) {
    // Get all orders in Bling
    const { data } = await bling_api.get(`pedidos/json&apikey=${apikey}`);
    const { pedidos } = data.retorno;

    // Set date as Bling's date format
    var today = new Date();
    const newDate = format(
      new Date(today.getFullYear(), today.getMonth(), today.getDate()),
      'yyyy-MM-dd'
    );

    var valor_total = 0;

    pedidos.forEach(pedido => {
      // Get all orders
      let {
        pedido: { data, totalvenda },
      } = pedido;

      // Transform values in Number format
      totalvenda = +totalvenda;

      // Check which order was requested today and sum total
      if (data == newDate) {
        valor_total += totalvenda;
      }
    });

    // Check if daily profit was already saved
    const profitExists = await Deal.findOne({
      data: newDate,
    });

    // If daily profit already saved, update it
    if (profitExists) {
      const { _id } = profitExists;
      const updated = await Deal.findByIdAndUpdate(
        _id,
        { valor_total, data: newDate },
        {
          new: true,
        }
      );
      return res.json(updated);
    }

    // Save in MongoDb all profit for that day
    const savedDeals = await Deal.create({ valor_total, data: newDate });
    return res.json(savedDeals);
  }
}

module.exports = new ProfitController();
