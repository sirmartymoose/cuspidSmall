if (Meteor.isServer) {
    Meteor.publish("logs", function () {
      return logs.find({});
    });
}

