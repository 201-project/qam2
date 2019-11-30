'use strict'

function TravelResult(
    name,
    travelPurpose,
    partner,
    budget,
) {
    this.name = name;
    this.travelPurpose = travelPurpose;
    this.partner = partner;
    this.budget = budget;
    shops.push(this);

}
form.addEventListener("submit",function (event) {
    event.preventDefault();
    var name = event.target.name.value;
    var travelPurpose = event.target.travelPurpose.value;
    var partner = event.target.partner.value;
    var budget = event.target.budget.value;
    var newTravelResult = new TravelResult(name,travelPurpose,partner,budget);
    form.reset();
});
