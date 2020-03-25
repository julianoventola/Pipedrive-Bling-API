# Orders API - Usando Pipedrive e Bling APIs

- Como iniciar

  - Run: npm install OU yarn
  - Start do backend: npm run dev OU yarn dev

- Rotas:(Não há autenticações nas rotas)
  - /bling/contatos - (GET) - Lista todos os contatos do Bling
  - /bling/contatos - (POST) - Salva um novo contato no BLing
  - /bling/produtos - (GET) - Lista todos os produtos no Bling
  - /bling/produtos - (POST) - Salva um novo contato no Bling
  - /bling/pedidos - (GET) - Lista todos os pedidos no Bling
  - /pipedrive - (GET) - Lista todas oportunidades no PipeDrive
  - /pipedrive/won - (GET) - Solicita todas oportunidades "won"do PipeDrive e cria um novo Pedido no Bling
  - /profit - (GET) - Valida todas as oportunidades do dia no Bling e salva no mongo o valor do dia

# Docker

- Utilizado para MongoDb
  - Run: docker run --name mongobarber -p 27017:27017 -d -t mongo
  - Mongo db Compass community - Usado para validar documentos
