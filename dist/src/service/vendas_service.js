import { db } from './service_utils';
export default function getAllUsers() {
    return db.select().from('usuario');
}
