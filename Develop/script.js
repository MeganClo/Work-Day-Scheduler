// adding the current day
$("#currentDay").text(moment().format("ddd MMMM do, YYYY"));

//getting current hour in the format that matches my id's for time-blocks. 
moment().format('HH');

// checking time blocks to see if they're in the past, present, or future and assigning the appropriate class
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

// $(".saveBtn").click(function() {
//     var description = $.trim($(".description").val());
//     console.log(description);
// });

 $(".saveBtn").click(function() {
    var desciption = $(this).siblings(".description").val();
    var timeBlock = $(this).parent().attr("id");
    console.log(timeBlock);
    console.log(desciption);
})

//    var description = $.trim($(".description").val());
//     console.log(description);
// });



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

//$(".container").append("<div class='row time-block'></div>");
//    $(".container").append("<div class='row time-block'></div>");
//});
//moment().format('hh')===newBlocks[2].time;
//saveDescriptions();




//saveddescriptions = JSON.parse(localStorage.getItem(""))