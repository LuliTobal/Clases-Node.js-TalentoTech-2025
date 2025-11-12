var router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');

//ruta principal
router.get('/', function (req, res, next) {
  //.render --> renderiza
  res.render('index', {
    title: 'Auth0 Webapp sample Nodejs',
    isAuthenticated: req.oidc.isAuthenticated()
  });
});

//ruta profiles
router.get('/profile', requiresAuth(), function (req, res, next) {
  //renderiza si el usuario esta autenticado, requiresAuth() quiere decir que requiere que el ususario esté autenticado para poder mostrar algo
  res.render('profile', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Profile page'
  });
});

module.exports = router;
