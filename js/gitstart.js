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

// var places=["aya","taj","quds","Makkah","WadiRum","MountEverest","CapeTown","AquaClub","petra","China","pyramids","rome","dubai","malaysia","norway","turkey"];
TravelResult.prototype.render = function () {
    console.log(purpose);

    if (purpose === "leisureTourism") {
        console.log(purpose === "leisureTourism");
        document.getElementById("religious").style.visibility = "hidden";
        document.getElementById("Historical").style.visibility = "hidden";
        document.getElementById("adventurous").style.visibility = "hidden";
    } else if (purpose === "HistoricalTourism") {
        document.getElementById("religious").style.visibility = "hidden";
        document.getElementById("leisure").style.visibility = "hidden";
        document.getElementById("adventurous").style.visibility = "hidden";
        // if (money === "$0 - $500") {
        //     document.getElementById("religious").style.visibility = "hidden";
        //     document.getElementById("religious").style.visibility = "hidden";
        //     document.getElementById("religious").style.visibility = "hidden";

        // }
    }else if (purpose === "religiousTourism") {
        document.getElementById("leisure").style.visibility = "hidden";
        document.getElementById("Historical").style.visibility = "hidden";
        document.getElementById("adventurous").style.visibility = "hidden";
    }else if (purpose === "adventurousTourism") {
        document.getElementById("religious").style.visibility = "hidden";
        document.getElementById("Historical").style.visibility = "hidden";
        document.getElementById("leisure").style.visibility = "hidden";
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

