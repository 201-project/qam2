'use strict';

var form = document.getElementById("travelForm");
var dataReligious = ["aya", "taj", "quds", "Makkah"];
var dataAdventurous = ["WadiRum", "MountEverest", "CapeTown", "AquaClub"];
var dataHistorical = ["petra", "China", "pyramids", "rome"];
var dataLiesure = ["dubai", "malaysia", "norway", "turkey"];
var purpose;
var money;
function TravelResult(
    travelPurpose,
    budget
) {

    this.travelPurpose = travelPurpose;
    purpose= this.travelPurpose;
    money = this.budget;
}

TravelResult.prototype.render = function () {
    // var container = document.getElementById("container");
    // // var iframe = document.getElementById("container");
    // var iframe = document.getElementById('iframe')
    // iframe.setAttribute('src', "leisure")
    
    if (purpose === "leisureTourism") {
        // document.getElementById("religious").style.visibility = "hidden";
        // document.getElementById("Historical").style.visibility = "hidden";
        // document.getElementById("adventurous").style.visibility = "hidden";
        var elem = document.getElementById('religious');
        elem.parentNode.removeChild(elem);
        var elem = document.getElementById('Historical');
        elem.parentNode.removeChild(elem);
        var elem = document.getElementById('adventurous');
        elem.parentNode.removeChild(elem);

    } else if (purpose === "HistoricalTourism") {
        // document.getElementById("religious").style.visibility = "hidden";
        // document.getElementById("leisure").style.visibility = "hidden";
        // document.getElementById("adventurous").style.visibility = "hidden";
        var elem = document.getElementById('religious');
        elem.parentNode.removeChild(elem);
        var elem = document.getElementById('leisure');
        elem.parentNode.removeChild(elem);
        var elem = document.getElementById('adventurous');
        elem.parentNode.removeChild(elem);
     } else if (purpose === "religiousTourism") {
        // document.getElementById("leisure").style.visibility = "hidden";
        // document.getElementById("Historical").style.visibility = "hidden";
        // document.getElementById("adventurous").style.visibility = "hidden";
        var elem = document.getElementById('leisure');
        elem.parentNode.removeChild(elem);
        var elem = document.getElementById('Historical');
        elem.parentNode.removeChild(elem);
        var elem = document.getElementById('adventurous');
        elem.parentNode.removeChild(elem);
    }else if (purpose === "adventurousTourism") {
        // document.getElementById("religious").style.visibility = "hidden";
        // document.getElementById("Historical").style.visibility = "hidden";
        // document.getElementById("leisure").style.visibility = "hidden";
        var elem = document.getElementById('religious');
        elem.parentNode.removeChild(elem);
        var elem = document.getElementById('Historical');
        elem.parentNode.removeChild(elem);
        var elem = document.getElementById('Historical');
        elem.parentNode.removeChild(elem);
    }
}
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var travelPurpose = event.target.travelPurpose.value;
    var budget = event.target.budget.value;
    var newTravelResult = new TravelResult(travelPurpose,budget);
    TravelResult.prototype.render();
    form.reset();
});

// function removeDummy() {
//     var elem = document.getElementById('dummy');
//     elem.parentNode.removeChild(elem);
//    }