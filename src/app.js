const router = require('router/vendas_router');
const express = express('express'); 

server.use(express.json());
server.use(router)

server.listen(8080, function() {
  console.log('batata')
})