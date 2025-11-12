const dotenv = require('dotenv');
const express = require('express');
const http = require('http');
const logger = require('morgan');
const path = require('path');
const router = require('./routes/index');
const { auth } = require('express-openid-connect');

dotenv.config(); //Libreria que permite acceder a las variables de entorno / or default viene .load pero es .config

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const port = process.env.PORT || 3000;
//objeto que usa para configurar la app
const config = {
  authRequired: false,
  auth0Logout: true,
  // secret: process.env.SECRET,
  // baseURL: process.env.BASE_URL || `http://localhost:${port}`,
  // clientID: process.env.CLIENT_ID,
  // issuerBaseURL: process.env.ISSUER_BASE_URL
};

/*
const port = process.env.PORT || 3000;
*/
if (!config.baseURL && !process.env.BASE_URL && process.env.PORT && process.env.NODE_ENV !== 'production') {
  config.baseURL = `http://localhost:${port}`; //URL de base de nuestra app, despues la cambiamos por la url dunde esté hosteado la app
}

app.use(auth(config));

// Middleware to make the `user` object available for all views
app.use(function (req, res, next) {
  res.locals.user = req.oidc.user;
  next();
});

app.use('/', router); //aca importa las rutas de la app

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handlers
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: process.env.NODE_ENV !== 'production' ? err : {}
  });
});

//creación del servidor
http.createServer(app)
  .listen(port, () => {
    console.log(`Listening on ${config.baseURL}`);
  });
