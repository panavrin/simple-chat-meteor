import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  console.log("simple-chat is running");
});

Meteor.publish('msgs', function() {
  return Msgs.find();
});

Meteor.methods({
  addMsg: function(name, msg) {
    console.log("addMsg received(", name,",", msg,")");
    return Msgs.insert({
      'name': name,
      'msg': msg
    });
  }
});
