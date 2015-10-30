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

Router.route('/createOpportunity', function () {
  this.render('createOpportunity');
});

Router.route('/register', function () {
  this.render('register');
});

Router.route('/login', function () {
  this.render('login');
});

Router.route('/dashboard', function () {
  this.render('dashboard');
});