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



Router.route('/updateDentist', function () {
  this.render('updateDentist');
});

Router.route('/updateAssistant', function () {
  this.render('updateAssistant');
});

Router.route('/listOpportunities', function () {
  this.render('listOpportunities');
});

Router.route('/viewOpportunity', function () {
  this.render('viewOpportunity');
});

Router.route('/viewOpportunity/:_id', function () {
  this.render('viewOpportunity', {
    data: function () {
      Meteor.call('getOpportunityDetails', this.params._id, function(err,res){
        Session.set('opportunityDetails', res)
      })
      


    }
  });
});