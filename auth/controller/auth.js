import express from 'express';
import Authentication from '../services/auth';

const userRoute = express.Router();

const auth = new Authentication();
const { register, login, userInfo } = auth;

userRoute.post('/signup', async (req, res) => {
    const {body} = req;
    res.status(200).send({
        ... await  register(body)
    })
});

userRoute.post('/signin', async (req, res) => {
    const {body} = req;
    res.status(200).send({
        ... await  login(body)
    })
});

userRoute.get('/info', async (req, res) => {
    const {headers} = req;
    res.status(200).send({
        ... await  userInfo(headers)
    })
});


export default userRoute;