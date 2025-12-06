import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key =  'nbjfk58vs9g665s99gsnjfvgh956fe';

export const auth = (req, res, next) => {
    const token = req.headers['authorization'].split(" ")[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, secret_key, (err) =>{
        if (err) return res.sendStatus(403);
        next();
    });
};

