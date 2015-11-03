logs = new Mongo.Collection("logs")


dentists = new Mongo.Collection("dentists");
dentists.attachSchema(new SimpleSchema({
    officeName: {
    type: String,
    label: "Office Name",
    max: 200,
    optional: false
  },
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
    optional: false, 
    autoform: {
      type: "select",
    options: function(){
        return [{label:'AL' , value: 'AL'},
                {label:'AK' , value: 'AK'},
                {label:'AZ' , value: 'AZ'},
                {label:'AR' , value: 'AR'},
                {label:'CA' , value: 'CA'},
                {label:'CO' , value: 'CO'},
                {label:'CT' , value: 'CT'},
                {label:'DE' , value: 'DE'},
                {label:'FL' , value: 'FL'},
                {label:'GA' , value: 'GA'},
                {label:'HI' , value: 'HI'},
                {label:'ID' , value: 'ID'},
                {label:'IL' , value: 'IL'},
                {label:'IN' , value: 'IN'},
                {label:'IA' , value: 'IA'},
                {label:'KS' , value: 'KS'},
                {label:'KY' , value: 'KY'},
                {label:'LA' , value: 'LA'},
                {label:'ME' , value: 'ME'},
                {label:'MD' , value: 'MD'},
                {label:'MA' , value: 'MA'},
                {label:'MI' , value: 'MI'},
                {label:'MN' , value: 'MN'},
                {label:'MS' , value: 'MS'},
                {label:'MO' , value: 'MO'},
                {label:'MT' , value: 'MT'},
                {label:'NE' , value: 'NE'},
                {label:'NV' , value: 'NV'},
                {label:'NH' , value: 'NH'},
                {label:'NJ' , value: 'NJ'},
                {label:'NM' , value: 'NM'},
                {label:'NY' , value: 'NY'},
                {label:'NC' , value: 'NC'},
                {label:'ND' , value: 'ND'},
                {label:'OH' , value: 'OH'},
                {label:'OK' , value: 'OK'},
                {label:'OR' , value: 'OR'},
                {label:'PA' , value: 'PA'},
                {label:'RI' , value: 'RI'},
                {label:'SC' , value: 'SC'},
                {label:'SD' , value: 'SD'},
                {label:'TN' , value: 'TN'},
                {label:'TX' , value: 'TX'},
                {label:'UT' , value: 'UT'},
                {label:'VT' , value: 'VT'},
                {label:'VA' , value: 'VA'},
                {label:'WA' , value: 'WA'},
                {label:'WV' , value: 'WV'},
                {label:'WI' , value: 'WI'},
                {label:'WY' , value: 'WY'}]
                }
              }},
  zipCode: {
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
    optional: false, 
    autoform: {
      type: "select",
    options: function(){
        return [{label:'AL' , value: 'AL'},
                {label:'AK' , value: 'AK'},
                {label:'AZ' , value: 'AZ'},
                {label:'AR' , value: 'AR'},
                {label:'CA' , value: 'CA'},
                {label:'CO' , value: 'CO'},
                {label:'CT' , value: 'CT'},
                {label:'DE' , value: 'DE'},
                {label:'FL' , value: 'FL'},
                {label:'GA' , value: 'GA'},
                {label:'HI' , value: 'HI'},
                {label:'ID' , value: 'ID'},
                {label:'IL' , value: 'IL'},
                {label:'IN' , value: 'IN'},
                {label:'IA' , value: 'IA'},
                {label:'KS' , value: 'KS'},
                {label:'KY' , value: 'KY'},
                {label:'LA' , value: 'LA'},
                {label:'ME' , value: 'ME'},
                {label:'MD' , value: 'MD'},
                {label:'MA' , value: 'MA'},
                {label:'MI' , value: 'MI'},
                {label:'MN' , value: 'MN'},
                {label:'MS' , value: 'MS'},
                {label:'MO' , value: 'MO'},
                {label:'MT' , value: 'MT'},
                {label:'NE' , value: 'NE'},
                {label:'NV' , value: 'NV'},
                {label:'NH' , value: 'NH'},
                {label:'NJ' , value: 'NJ'},
                {label:'NM' , value: 'NM'},
                {label:'NY' , value: 'NY'},
                {label:'NC' , value: 'NC'},
                {label:'ND' , value: 'ND'},
                {label:'OH' , value: 'OH'},
                {label:'OK' , value: 'OK'},
                {label:'OR' , value: 'OR'},
                {label:'PA' , value: 'PA'},
                {label:'RI' , value: 'RI'},
                {label:'SC' , value: 'SC'},
                {label:'SD' , value: 'SD'},
                {label:'TN' , value: 'TN'},
                {label:'TX' , value: 'TX'},
                {label:'UT' , value: 'UT'},
                {label:'VT' , value: 'VT'},
                {label:'VA' , value: 'VA'},
                {label:'WA' , value: 'WA'},
                {label:'WV' , value: 'WV'},
                {label:'WI' , value: 'WI'},
                {label:'WY' , value: 'WY'}]
                }
              }},
    zipCode: {
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
  
  officeName: {
    type: String,
    label: "Office Name",
    max: 200,
    optional: false
  },
  positionName: {
    type: String,
    label: "Name of Position",
    max: 200,
    optional: false
  },
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
  }, 
  state: {
    type: String,
    defaultValue: "opportunity",
    optional: true
  }, 
  'booking.isBooked': {
    type: Boolean, 
    optional: true,
    defaultValue: false
  }, 
  'booking.assistantId': {
    type: String, 
    optional: true,
    defaultValue: ''
  }, 
  'booking.hasOccurred': {
    type: Boolean, 
    optional: true,
    defaultValue: false
  }, 
  'booking.isBilled': {
    type: Boolean, 
    optional: true,
    defaultValue: false
  }, 
  'booking.isPaid': {
    type: Boolean, 
    optional: true,
    defaultValue: false
  }, 
  'booking.billedAmount': {
    type: Number, 
    optional: true,
    defaultValue: 0
  }, 
  'booking.paidAmount': {
    type: Number, 
    optional: true,
    defaultValue: 0
  }, 
  'booking.agreedAmount': {
    type: Number, 
    optional: true,
    defaultValue: 0
  },
    'booking.contractedDate': {
    type: String, 
    optional: true,
  },
  'booking.dentistRating': {
    type: Number, 
    optional: true,
    defaultValue: 0
  }, 
  'booking.assistantRating': {
    type: Number, 
    optional: true,
    defaultValue: 0
  }, 
  'booking.hasAssistantRated': {
    type: Boolean, 
    optional: true,
    defaultValue: false
  },   
  'booking.hasDentistRated': {
    type: Boolean, 
    optional: true,
    defaultValue: false
  }, 
   
   

     
     
   
   
  
}));

