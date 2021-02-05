console.log("can you see me?")

var date = new Date();
var month = date.getMonth();
var day = date.getDate();
var year = date.getFullYear();
newDate = year + "/" + month + "/" + day;
document.getElementById("currentDay").innerHTML = date;
// console.log(date);

function hourUpdater() {
    var currentHour = date.getHours();
    console.log(currentHour);
    $(".save-hour").each(function() {
      var blockHour = parseInt($(this).parent().attr("id").split("hour-")[1]);
      console.log($(this).parent().attr("id").split("hour-"));
      console.log($(this).parent().attr("id").split("-"));

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } 
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
}
hourUpdater();

function daySaver(event) {
  // stop search unless user presses the Enter key. The Keycode for "enter" is the numer 13 - thanks Jess!
  if (event.keyCode === 13 || event.target.matches(".saveBtn")) {
    var userInfo = $(event.target).parent().attr("id");
    console.log(event.target);
    var userText = $(event.target).siblings("textarea").val();

    if (event.keyCode === 13) {
    userText = $(event.target).val();
    }
    localStorage.setItem(userInfo, userText);

    console.log(userInfo);
    console.log(userText);
  } else {
    return;
  }
}

$(".saveBtn").on("click", daySaver);
$("textarea").on("keyup", daySaver);

// Added functionality of pressing the 'Enter' button instead of save button check line 31
// $(".saveBtn").on("click", function(event) {
//     var userInfo = $(event.target).parent().attr("id");
//     console.log(event.target);
//     var userText = $(event.target).siblings("textarea").val();
//     localStorage.setItem(userInfo, userText);
//     console.log(userInfo);
//     console.log(userText);
// })

function getStorage() {
  $("#hour-9").children("textarea").text(localStorage.getItem("hour-9"));
  $("#hour-10").children("textarea").text(localStorage.getItem("hour-10"));
  $("#hour-11").children("textarea").text(localStorage.getItem("hour-11"));
  $("#hour-12").children("textarea").text(localStorage.getItem("hour-12"));
  $("#hour-13").children("textarea").text(localStorage.getItem("hour-13"));
  $("#hour-14").children("textarea").text(localStorage.getItem("hour-14"));
  $("#hour-15").children("textarea").text(localStorage.getItem("hour-15"));
  $("#hour-16").children("textarea").text(localStorage.getItem("hour-16"));
  $("#hour-17").children("textarea").text(localStorage.getItem("hour-17"));
}
getStorage();