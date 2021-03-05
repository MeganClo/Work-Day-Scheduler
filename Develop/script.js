// adding the current day
$("#currentDay").text(moment().format("ddd MMMM do, YYYY"));

//getting current hour 
moment().format('hh');

var blocks = [
    {
        hour: "9AM",
        description: "",
        time: "09"
    },
    {
        hour: "10AM",
        description: "",
        time: "10"
    },
    {
        hour: "11AM",
        description: "",
        time: "11"
    },
    {
        hour: "12PM",
        description: "",
        time: "12"
    },    
    {
        hour: "1PM",
        description: "",
        time: "01"
    },    
    {
        hour: "2PM",
        description: "",
        time: "02"
    },    
    {
        hour: "3PM",
        description: "",
        time: "03"
    },
    {
        hour: "4PM",
        description: "",
        time: "04"
    },
    {
        hour: "5PM",
        description: "",
        time: "05"
    }
];

//saves data to local storage
function saveDescriptions() {
    localStorage.setItem("blocks", JSON.stringify(blocks));
};

var newBlocks = JSON.parse(localStorage.getItem("blocks"));

console.log(newBlocks);

$(".container").append("<div class='row time-block'></div>");
//    $(".container").append("<div class='row time-block'></div>");
//});
//moment().format('hh')===newBlocks[2].time;
saveDescriptions();




//saveddescriptions = JSON.parse(localStorage.getItem(""))