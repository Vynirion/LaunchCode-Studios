// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", true), function () {
 
function OffTake () {
    window.confirm("Please Confirm that the Shuttle is ready for liftoff.");
}
function Stat () {
  flightStatus = "Shuttle in flight"
}

let takeoffbtn = document.getElementById(takeoff);
takeoffbtn.addEventListener("click", OffTake);

let status = document.getElementById(flightStatus);
status.addEventListener("update",Stat);

let Landbtn = document.getElementById(landing);
Landbtn.addEventListener("click", true), function () {
    window.confirm("The shuttle is landing. Landing gear engaged.");
shuttleHeight.addEventListener("update", 0);
};
AbrtM.addEventListener("click", true), function () {
    window.confirm("Confirm that you want to abort the mission..?");
    
}


};
