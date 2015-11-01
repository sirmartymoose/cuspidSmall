logs = new Mongo.Collection("logs")


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
  },dentistUserId: {
    type: String,
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
  },assistantUserId: {
    type: String,
    optional: true
  }
}));

opportunities = new Mongo.Collection("opportunities");
opportunities.attachSchema(new SimpleSchema({
  needDate: {
    type: Date,
    label: "Date Needed",
    max: 200,
    optional: false
  },
  startTime: {
    type: String,
    label: "Start Time",
    optional: false,
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "6:00AM", value: 6},
          {label: "7:00AM", value: 7},
          {label: "8:00AM", value: 8},
          {label: "9:00AM", value: 9},
          {label: "10:00AM", value: 10},
          {label: "11:00AM", value: 11},
          {label: "12:00PM", value: 12},
          {label: "1:00PM", value: 13},
          {label: "2:00PM", value: 14},
          {label: "3:00PM", value: 15},
          {label: "4:00PM", value: 16},
          {label: "5:00PM", value: 17},
          {label: "6:00PM", value: 18}
        ];
      }
    }
  },
    endTime: {
  type: String,
      label: "End Time",
      optional: false,
      autoform: {
    type: "select",
        options: function () {
      return [
        {label: "6:00AM", value: 6},
        {label: "7:00AM", value: 7},
        {label: "8:00AM", value: 8},
        {label: "9:00AM", value: 9},
        {label: "10:00AM", value: 10},
        {label: "11:00AM", value: 11},
        {label: "12:00PM", value: 12},
        {label: "1:00PM", value: 13},
        {label: "2:00PM", value: 14},
        {label: "3:00PM", value: 15},
        {label: "4:00PM", value: 16},
        {label: "5:00PM", value: 17},
        {label: "6:00PM", value: 18}
      ];
    }
  }
},
  hourlyRate: {
    type: Number,
    label: "Rate per hour",
    optional: false
  },
  description: {
    type: String,
    label: "Description",
    optional: false,
    autoform: {
      afFieldInput: {
        type: "textarea"
      }
    }
  },
  firstName: {
    type: String,
    label: "First Name",
    max: 200,
    optional: true
  },lastName: {
    type: String,
    label: "Last Name",
    max: 200,
    optional: true
  },address1: {
    type: String,
    label: "Address 1",
    max: 200,
    optional: true
  },address2: {
    type: String,
    label: "Address line 2 (Optional)",
    max: 200,
    optional: true
  },
  city: {
    type: String,
    label: "City",
    max: 200,
    optional: true
  },
  state: {
    type: String,
    label: "State",
    max: 200,
    optional: true
  },
  zipCode: {
    type: Number,
    label: "ZipCode",
    optional: true
  },
  opportunityDentistId: {
    type: String,
    label: "Createor",
    optional: true
  }
}));

