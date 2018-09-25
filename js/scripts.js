// biz logic

var thing1 = "";
var thing2 = "";
var thing3 = "";
var thing4 = "";
var allthings = [];
var final = [];

var finalArray = function() {
  final.push(allthings[1], allthings[0], allthings[2])
};

// ui logic

$(document).ready(function() {
  $("form#favform").submit(function(event) {
    event.preventDefault();

    thing1 = $("#favthing1").val();
    thing2 = $("#favthing2").val();
    thing3 = $("#favthing3").val();
    thing4 = $("#favthing4").val();

    allthings.push(thing1, thing2, thing3, thing4);
    // allthings.push(thing2);
    // allthings.push(thing3);
    // allthings.push(thing4);

    finalArray();

    $("#first").text(final[0]);
    $("#second").text(final[1]);
    $("#third").text(final[2]);

    $("#fourth").text(final);
    // console.log(allthings);
    //
    // $("#first").text(allthings);

    // var empty = [];
    // var final = empty.push(thing2,thing1,thing3);
    // var print = final.toString();

    // var final = .push(allthings[1],allthings[0],allthings[2]);

    // $("#first").text(allthings[1]);
    // $("#second").text(allthings[0]);
    // $("#third").text(allthings[2]);
    // $("#fourth").text(print);

  });
});
