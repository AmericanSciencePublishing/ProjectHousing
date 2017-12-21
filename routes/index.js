const sign_up = require('./sign_up');
const log_in = require('./log_in');
const offline = require('./offline');
const online = require('./online');
const houses = require('./houses');
const checkUser = require('./checkUser');
const cities = require('./cities');
const saved_houses = require('./saved_houses');
const users = require('./users');
const forgotpwd = require('./forgotpwd');
const resetpwdemail = require('./resetpwdemail');
const search = require('./search');
const updateInfo = require('./updateInfo');

module.exports = function(app){
  app.use('/sign_up', sign_up);
  app.use('/log_in', log_in);
  app.use('/online',online);
  app.use('/houses', houses);
  app.use('/offline',offline);
  app.use('/checkUser',checkUser);
  app.use('/cities', cities);
  app.use('/forgotpwd',forgotpwd);
  app.use('/resetpwdemail',resetpwdemail);
  app.use('/api/saved_houses', saved_houses);
  app.use('/api/current_user', users);
  app.use('/search', search);
  app.use('/updateInfo', updateInfo);
}
