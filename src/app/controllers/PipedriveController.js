const pipedrive_api = require('../../services/pipedrive_api');

class PipedriveController {
  async show(req, res) {
    const { data } = await pipedrive_api.get();
    const oportunities = [];
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

    res.json(oportunities);
  }

  async index(req, res) {
    const { data } = await pipedrive_api.get();
    const oportunities = [];
    data.data.forEach(client => {
      if (client.status == 'won') {
        let {
          title,
          value,
          status,
          won_time,
          person_id: { name },
        } = client;
        oportunities.push({ title, value, status, won_time, name });
      }
    });

    res.json(oportunities);
  }
}

module.exports = new PipedriveController();
