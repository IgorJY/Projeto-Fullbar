import express from 'express';
import { router } from 'router/vendas_router';
const server = express();
server.use(express.json());
server.use(router);
server.listen(8080, function () {
    console.log('batata');
});
