import { generateToken } from "../data/token_test.js";

/* COMO DEBERIA SER
export async function login (req, res) {
    const {email, password} = req.body; //desestructura el body de la request y toma el email y el password
    if (email === default_user.email && password === default_user.password){ //primera verificación, si coincide la info
        const token = generateToken(user); //llama a la funcion del controlador y le pasa el usuario por parametro, esta le va a devolver el qoken que lo guaramos en la constante
        res.json({ token }); //envia como respuesta el tken generado
    } else {
        res.sendStatus(401);
    };
}; 
*/

//HARDCODEADO

export async function login (req, res) {
    const {email, password} = req.body; //desestructura el body de la request y toma el email y el password
    if (email === 'test@gmail.com' && password === '123456'){ //primera verificación, si coincide la info
        const user = {email: email, id:'123'} //creamos el objeto ususario, la kibreria del token necesita que tenga id, por eso lo pondemos
        const token = generateToken(user); //llama a la funcion del controlador y le pasa el usuario por parametro, esta le va a devolver el qoken que lo guaramos en la constante
        res.json({ token }); //envia como respuesta el tken generado
    } else {
        res.sendStatus(401);
    };
};


