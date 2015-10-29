
dentists = new Mongo.Collection("dentists");
dentists.attachSchema(new SimpleSchema({
  firstName: {
    type: String,
    label: "First Name",
    max: 200,
    optional: false
  },lastName: {
    type: String,
    label: "Last Name",
    max: 200,
    optional: false
  },address1: {
    type: String,
    label: "Address 1",
    max: 200,
    optional: false
  },address2: {
    type: String,
    label: "Address line 2 (Optional)",
    max: 200,
    optional: true
  },city: {
    type: String,
    label: "City",
    max: 200,
    optional: false
  },state: {
    type: String,
    label: "State",
    max: 200,
    optional: false
  },zipCode: {
    type: Number,
    label: "ZipCode",
    
    optional: false
  },isActive: {
    type: Number,
    label: "Is Active",
    max: 1,
    optional: true
  },isApproved: {
    type: Number,
    label: "Is approved",
    max: 1,
    optional: true
  }
}));

assistants = new Mongo.Collection("assistants");
assistants.attachSchema(new SimpleSchema({
  firstName: {
    type: String,
    label: "First Name",
    max: 200,
    optional: false
  },lastName: {
    type: String,
    label: "Last Name",
    max: 200,
    optional: false
  },address1: {
    type: String,
    label: "Address 1",
    max: 200,
    optional: false
  },address2: {
    type: String,
    label: "Address line 2 (Optional)",
    max: 200,
    optional: true
  },city: {
    type: String,
    label: "City",
    max: 200,
    optional: false
  },state: {
    type: String,
    label: "State",
    max: 200,
    optional: false
  },zipCode: {
    type: Number,
    label: "ZipCode",
    max: 5,
    optional: false
  },isActive: {
    type: Number,
    label: "Is Active",
    max: 1,
    optional: true
  },isApproved: {
    type: Number,
    label: "Is approved",
    max: 1,
    optional: true
  },isAvailableMonday: {
    type: Boolean,
    label: "Available Monday"
  },isAvailableTuesday: {
    type: Boolean,
    label: "Available Tuesday"
  },isAvailableWednesday: {
    type: Boolean,
    label: "Available Wednesday"
  },isAvailableThursday: {
    type: Boolean,
    label: "Available Thursday"
  },isAvailableFriday: {
    type: Boolean,
    label: "Available Friday"
  },isAvailableSaturday: {
    type: Boolean,
    label: "Available Saturday"
  },isAvailableSunday: {
    type: Boolean,
    label: "Available Sunday"
  }
}));