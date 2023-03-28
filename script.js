var saveButtonEl = $(".saveBtn");
var textareaEl = $(".description");
var time = dayjs().format('HH');
var scheduledTime = $("#hour-9");
var dateEl =$("#currentDay");

function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  dateEl.text(rightNow);
}

// try to save userinputEl to local storage
function saveInput (event) {
   console.log(this)
   console.log($(this).siblings())
   console.log($(this).siblings(".description"))
   var textareaVal=  $(this).siblings(".description").val()
   var hourVal= $(this).parent().attr('id')
// var scheduleInput = textareaEl.val();
// window.localStorage.getItem("scheduleInput");
    localStorage.setItem(hourVal, textareaVal)

   

}
$(saveButtonEl).on('click', saveInput)

// Second to do; comparing current time to past, present or future class





  
  
      $(".time-block").each(function( ){
        // var schedulerTime= parseInt(timeBlockEl[i].id.substring(5));
        var schedulerTime= $(this).attr("data-hour")
        console.log (schedulerTime, time)
        if(time > schedulerTime){
          $(this).addClass("future");
          $(this).removeClass("past");
          $(this).removeClass("present");
          }
          else if(time === schedulerTime){
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
          }
          else {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }})
          

$(function displayInput(){
$("#hour-9").find(".description").val(localStorage.getItem("hour-9"))
$("#hour-10").find(".description").val(localStorage.getItem("hour-10"))
$("#hour-11").find(".description").val(localStorage.getItem("hour-11"))
$("#hour-12").find(".description").val(localStorage.getItem("hour-12"))
$("#hour-13").find(".description").val(localStorage.getItem("hour-13"))
$("#hour-14").find(".description").val(localStorage.getItem("hour-14"))
$("#hour-15").find(".description").val(localStorage.getItem("hour-15"))
$("#hour-16").find(".description").val(localStorage.getItem("hour-16"))
$("#hour-17").find(".description").val(localStorage.getItem("hour-17"))



});

displayTime();
setInterval(displayTime, 1000);