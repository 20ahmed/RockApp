var comScore = 0;
var playerScore = 0;

const rock = document.querySelector("#rock_btn");
const papper = document.querySelector("#papper_btn");
const scissors = document.querySelector("#scissors_btn");
const theWinnerBaner = document.querySelector("#the_winner");
var numOfIndx;

const selectionButtons = document.querySelectorAll("[data-selection]");

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    makeSelection(selectionName);
  });
});

function makeSelection(selection) {
  return selection;
}

var returnedSelection = makeSelection();

const computerNumber = Math.floor(Math.random() * 3);

function change(numOfIndx, returnedSelection, evt) {
  document.getElementById("imgPlayer").src = `/image/${numOfIndx}.png`;
  // console.log(clickedVal.value);
  const computerNumber = Math.floor(Math.random() * 3);

  document.getElementById("imgCom").src = `/image/${computerNumber}.png`;
  compare(numOfIndx, computerNumber, returnedSelection);
}

rock.addEventListener("click", (evt) => change(0, returnedSelection, evt));

papper.addEventListener("click", (evt) => change(1, returnedSelection, evt));

scissors.addEventListener("click", (evt) => change(2, returnedSelection, evt));

function compare(numOfIndx, computerNumber, returnedSelection) {
  if (returnedSelection == "rock") {
    if (numOfIndx && computerNumber == 0) {
      console.log(numOfIndx && computerNumber, " equal Each");
      theWinnerBaner.innerHTML = "It is a tie";
    }
  } else if (returnedSelection == "papper") {
    if (numOfIndx && computerNumber == 0) {
      console.log(numOfIndx || computerNumber, " equal Each");
      theWinnerBaner.innerHTML = "It is a tie";
    }
  } else if (returnedSelection == "scissors") {
    if (numOfIndx && computerNumber == 0) {
      console.log(numOfIndx || computerNumber, " equal Each");
      theWinnerBaner.innerHTML = "It is a tie";
    }
  }
}
