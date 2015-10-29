Router.route('/', function () {
  this.render('welcome');
});


Router.route('/welcome', function () {
  this.render('welcome');
});

Router.route('/logs', function () {
  this.render('logs');
});

Router.route('/createAssistant', function () {
  this.render('createAssistant');
});

Router.route('/createDentist', function () {
  this.render('createDentist');
});