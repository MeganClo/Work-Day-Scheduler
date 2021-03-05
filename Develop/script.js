// adding the current day
$("#currentDay").text(moment().format("ddd MMMM do, YYYY"));

//getting current hour 
moment().format('HH');

// checking time blocks to see if they're in the past, present, or future
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
});

//saves data to local storage
//function saveDescriptions() {
//    localStorage.setItem("blocks", JSON.stringify(blocks));
//};

//var newBlocks = JSON.parse(localStorage.getItem("blocks"));

//console.log(newBlocks);

//newBlocks.forEach(function(rows) {
//    $(".container").append("<div class='row time-block'></div>");
//    $(".row").append()
//})

$(".container").append("<div class='row time-block'></div>");
//    $(".container").append("<div class='row time-block'></div>");
//});
//moment().format('hh')===newBlocks[2].time;
saveDescriptions();




//saveddescriptions = JSON.parse(localStorage.getItem(""))