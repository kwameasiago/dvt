import express from 'express';
import Authentication from '../services/auth';
const userRoute = express.Router();

const auth = new Authentication();
const { register } = auth;

userRoute.post('/signup', async (req, res) => {
    const {body} = req;
    res.status(200).send({
        hello: await  register(body)
    })
});

userRoute.post('/signin', (req, res) => {
    res.status(200).send({
        res: 'hello world from sign in'
    })
});


export default userRoute;