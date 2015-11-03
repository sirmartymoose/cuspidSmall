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
  if(Meteor.user() != null){
      if(Meteor.user().profile.isAssistant){
        this.render('createAssistant');
      } else {this.render('dashboard')}
  } else {this.render('welcome')}
});

Router.route('/createDentist', function () {
  if(Meteor.user() != null){
      if(Meteor.user().profile.isDentist){
        this.render('createDentist');
      } else {this.render('dashboard')}
  } else {this.render('welcome')}
});

Router.route('/createOpportunity', function () {
  if(Meteor.user() != null){
      if(Meteor.user().profile.isDentist){
        this.render('createOpportunity');
      } else {this.render('dashboard')}
  } else {this.render('welcome')}
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
  if(Meteor.user() != null){
      if(Meteor.user().profile.isDentist){
        this.render('updateDentist');
      } else {this.render('dashboard')}
  } else {this.render('welcome')}
});

Router.route('/updateAssistant', function () {
  if(Meteor.user() != null){
      if(Meteor.user().profile.isAssistant){
        this.render('updateAssistant');
      } else {this.render('dashboard')}
  } else {this.render('welcome')}
});

Router.route('/listOpportunities', function () {
  if(Meteor.user() != null){
      if(Meteor.user().profile.isAssistant){
        this.render('listOpportunities');
      } else {this.render('dashboard')}
  } else {this.render('welcome')}
});



Router.route('/viewOpportunity/:_id', function () {
  this.render('viewOpportunity');
});