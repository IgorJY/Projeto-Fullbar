const Request = require ('express');
const Response = require ('express');
const Router = require ('express');
const service = require ('service/vendas_service');

export const router = Router()

router.get('/', async (req, res) => {
    try {
        const response = await service()
        res.statusCode = 200
        res.json(response)
    } catch (err) {
        res.status(500).send({ message: "Error saving data" })
    }
})