// Moment 

var date = moment().format("MMMM Do YYYY, h:mm a");
var currentDay = document.getElementById("currentDay");

currentDay.textContent=date;

// *******
// Var for Time of Day color block
var hourNum = moment().format("h");
var hours = document.getElementsByClassName("hour");
var values = Array.prototype.map.call(hours, function(el) {
}
);
var timeBlock = document.querySelector(".time-block");

if (hourNum === hours[6]) {
    renderPresent();
};

// *****
// Where I'll call the past present and future styles
function renderPresent() {
schedDescription.classList.add("present");
console.log("you there");
};

// Vars for the user input 
var schedDescription = document.querySelector(".description").value;
var saveBtn = document.querySelector(".saveBtn");
var userSaveSpan = document.querySelector(".userSave");
// Text area and Time Block user input

renderDescription();

function displayMessage(type, message) {
  schedDescription.textContent = message;
  schedDescription.setAttribute("class", type);
};
//  Description Schedule Text 
function renderDescription() {
  var userSched = localStorage.getItem("schedDescription", schedDescription);
  if (!schedDescription) {
    return;
  }
  userSaveSpan.textContent = userSched;
};

// Event for saveBtn
saveBtn.addEventListener("click", function(event) {
    event.preventDefault();
  
    var schedDescription = document.querySelector(".description").value;
      localStorage.setItem("schedDescription", schedDescription);


      renderDescription();
});
