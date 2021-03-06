// adding the current day to header
$("#currentDay").text(moment().format("ddd MMMM do, YYYY"));

// getting current hour in the format that matches my id's for time-blocks. 
// moment().format('HH');

// checking time blocks to see if they're in the past, present, or future and assigning the appropriate class
var checkingTime = function(){
//    var currentHour = moment().hours();
    $(".time-block").each(function() {
    var hourBlock = $(this).attr("id");
    console.log(hourBlock, moment().format('HH'))

    if (hourBlock < moment().format('HH')) {
        $(this).removeClass("present");
        $(this).addClass("past");
    } else if (hourBlock === moment().format('HH')) {
        $(this).removeClass("future");
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
})};

// getting values into variables to save to local storage
 $(".saveBtn").click(function() {
    var description = $(this).siblings(".description").val();
    var timeBlock = $(this).parent().attr("id");
    localStorage.setItem( timeBlock, description);
});

// pulling from local storage and setting the value of the textarea to what's in local storage
var getting = function() {
    $("#09").children("textarea").val(localStorage.getItem("09")); 
    $("#10").children("textarea").val(localStorage.getItem("10"));
    $("#11").children("textarea").val(localStorage.getItem("11"));
    $("#12").children("textarea").val(localStorage.getItem("12"));
    $("#13").children("textarea").val(localStorage.getItem("13"));
    $("#14").children("textarea").val(localStorage.getItem("14"));
    $("#15").children("textarea").val(localStorage.getItem("15"));
    $("#16").children("textarea").val(localStorage.getItem("16"));
    $("#17").children("textarea").val(localStorage.getItem("17"));
};

// running the checkingtime function every 10 minutes to update color blocks if needed
setInterval(function(){
    checkingTime();
}, 600000);

checkingTime();
getting();
