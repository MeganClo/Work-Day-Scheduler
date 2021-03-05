// adding the current day
$("#currentDay").text(moment().format("ddd MMMM do, YYYY"));

//getting current hour in the format that matches my id's for time-blocks. 
moment().format('HH');

// checking time blocks to see if they're in the past, present, or future and assigning the appropriate class
var checkingTime = function(){
    $(".time-block").each(function() {
    var hourBlock = $(this).attr("id");
    console.log(hourBlock, moment().format('HH'))

    if (hourBlock < moment().format('HH')) {
        $(this).addClass("past");
    } else if (hourBlock === moment().format('HH')) {
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
//    console.log(timeBlock);
//    console.log(description);
});

var getting = function() {
    var block = localStorage.getItem("09");
    console.log(block);
    $("#09").children("textarea").val() = block;
};





// running the checkingtime function every 15 minutes to update color blocks if needed
setInterval(function(){
    checkingTime();
}, 900000);

checkingTime();
getting();
