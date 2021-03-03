// adding the current day
$("#currentDay").text(moment().format("ddd MMMM do, YYYY"));

//getting current hour 
moment().format('hh');

var blocks = [
    {
        hour: "9AM",
        description: "",
    },
    {
        hour: "10AM",
        description: "",
    },
    {
        hour: "11AM",
        description: "",
    },
    {
        hour: "12PM",
        description: "",
    },    
    {
        hour: "1PM",
        description: "",
    },    
    {
        hour: "2PM",
        description: "",
    },    
    {
        hour: "3PM",
        description: "",
    },
    {
        hour: "4PM",
        description: "",
    },
    {
        hour: "5PM",
        description: "",
    }
];

//saves data to local storage
function saveDescriptions() {
    localStorage.setItem("blocks", JSON.stringify(blocks));
};

//
saveDescriptions();




//saveddescriptions = JSON.parse(localStorage.getItem(""))