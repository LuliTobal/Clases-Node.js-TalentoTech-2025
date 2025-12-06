import jwt from 'jsonwebtoken'; //importamos libreria
import 'dotenv/config'; //importamos archivo .env
const secret_key =  'nbjfk58vs9g665s99gsnjfvgh956fe'; //process.env.JWT_SECRET_KEY; //lo comentamos porque no funciona, pero deberia traer la info de la variable de entorno

export const generateToken = (userData) => {
    const user = {id: userData.id, email: userData.email};
    const expiration = {expiresIn: '1h'}; //declaramos la duración del token
    return jwt.sign(user, secret_key, expiration); //paso la info del usuario, la secret key y el tiempo de validez
};

//const token = generateToken({id: "1", email: "probando@test.com"});
//console.log(token)