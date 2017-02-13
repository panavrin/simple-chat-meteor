import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.chatbox.onCreated(function helloOnCreated() {
  // counter starts at 0
});


Template.chatbox.onRendered(function helloOnCreated() {
  // counter starts at 0
  $('#input-name').val(Session.get("name"));
});

Template.chatbox.helpers({
  msgList: function() {
    return Msgs.find();
  },
  myName : function(){
      return this.name == Session.get("name");
  }
});

Meteor.subscribe('msgs');

Template.chatbox.events({
  'click #add-msg': function () {
    var msgText = $('#input-msg').val();
    var name = $('#input-name').val();
    if(msgText.trim() != ""){
      Meteor.call('addMsg',name, msgText);
      $('#input-msg').val('');
    }
  },
  'focusout #input-name':function(){
    Session.set("name",$('#input-name').val());
  }

});

Template.chatbox.msgsList = function(){
  return Msgs.find();
}
