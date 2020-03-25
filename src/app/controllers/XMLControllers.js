const storePessoaFisica = (nome_cliente, cpf_cliente) =>
  "<?xml version='1.0' encoding='UTF-8'?>" +
  '<contato>' +
  `<nome>${nome_cliente}</nome>` +
  '<tipoPessoa>F</tipoPessoa>' +
  '<contribuinte>9</contribuinte>' +
  `<cpf_cnpj>${cpf_cliente}</cpf_cnpj>` +
  ' </contato>';

const storeProdutoNovo = (descricao_produto, variacao_produto) =>
  '<?xml version="1.0" encoding="UTF-8"?>' +
  '<produto>' +
  `<descricao>${descricao_produto}</descricao>` +
  '<variacao>' +
  `<nome>${variacao_produto}</nome>` +
  '</variacao>' +
  '</produto>';

const storePedidoNovo = (
  nome_cliente,
  id_venda,
  descricao_produto,
  valor_produto,
  valor_parcela
) =>
  '<?xml version="1.0" encoding="UTF-8"?>' +
  '<pedido>' +
  '<cliente>' +
  `<nome>${nome_cliente}</nome>` +
  '</cliente>' +
  '<itens>' +
  '<item>' +
  `<codigo>${id_venda}</codigo>` +
  `<descricao>${descricao_produto}</descricao>` +
  '<un>Un</un>' +
  '<qtde>1</qtde>' +
  `<vlr_unit>${valor_produto}</vlr_unit>` +
  '</item>' +
  '</itens>' +
  '<parcelas>' +
  '<parcela>' +
  `<vlr>${valor_parcela}</vlr>` +
  '</parcela>' +
  '</parcelas>' +
  '</pedido>';

module.exports = { storePessoaFisica, storeProdutoNovo, storePedidoNovo };
