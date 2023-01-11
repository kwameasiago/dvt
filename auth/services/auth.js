import bcrypt from 'bcrypt'
import db from '../models';


class Authentication {
    async register(userData) {
        const { firstName, lastName, email, password } = userData;
        try {
            let res = await db.User.create({
                firstName, lastName, email,
                password: await bcrypt.hash(password, process.env.SALT || 10)
            });
            return res
        } catch (error) {
            console.log(error)
            return error
        }
    }
}

export default Authentication;