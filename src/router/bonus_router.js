const Request  = require('express');
const Response = require('express');
const CreateContactUseCase = require('../../domain/interfaces/use-cases/create-contact-use-case');
const GetAllContactsUseCase = require ('../../domain/interfaces/use-cases/get-all-contacts-use-case');

export default function ContactsRouter(
    getAllContactsUseCase: GetAllContactsUseCase,
    createContactUseCase: CreateContactUseCase
) {
    const router = express.Router()

    router.get('/', async (req: Request, res: Response) => {
        try {
            const contacts = await getAllContactsUseCase.execute()
            res.send(contacts)
        } catch (err) {
            res.status(500).send({ message: "Error fetching data" })
        }
    })

    return router
}