const db = require('./service_utils');

export default function getAllUsers() {
    return db.select().from('usuario');
}