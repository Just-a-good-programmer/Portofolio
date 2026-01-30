//This JavaScript File was made by Mitchel Straub


// Get references to the project divs
const eenmaalAndermaal = document.getElementById("eenmaal-andermaal");
const pinkGoose = document.getElementById("pink-goose");
const mastermind = document.getElementById("mastermind");
const portfolioWebsite = document.getElementById("portfolio-website");
const spaceRaiders = document.getElementById("space-raiders");
const echoesOfSlaughter = document.getElementById("echoes-of-slaughter");

const link = document.querySelector("a");

link.addEventListener("click", () => {
  console.log("Link was clicked");
});

// Function to grow a div by a specified amount
function growDiv(id, amount = 200) {
  const div = document.getElementById(id);
  const styles = window.getComputedStyle(div);
  const width = parseFloat(styles.width);
  const height = parseFloat(styles.height);

  div.style.width = `${width + amount}px`;
  div.style.height = `${height + amount}px`;
}

// Function to shrink a div by a specified amount
function shrinkDiv(id, amount = 200) {
  const div = document.getElementById(id);
  const styles = window.getComputedStyle(div);
  const width = parseFloat(styles.width);
  const height = parseFloat(styles.height);
}


// View project functions to change background image and set the ids and amount for growDiv function

function viewEenmaalAndermaal() {        
    eenmaalAndermaal.style.backgroundImage = "url('img/eenmaal-andermaal.png')";
    growDiv("eenmaal-andermaal", 300);
}

function viewPinkGoose() {
    pinkGoose.style.backgroundImage = "url('img/pink-goose-press.png')";
    growDiv("pink-goose", 300);
}

function viewMastermind() {
    mastermind.style.backgroundImage = "url('img/mastermind-code.png')";
    growDiv("mastermind", 300);
}

function viewPortfolioWebsite() {;
    alert("Did... you seriously just try to view the portfolio website from within the portfolio website?");
}

function viewSpaceRaiders() {
    spaceRaiders.style.backgroundImage = "url('img/space-raiders-game.png')";
    growDiv("space-raiders", 300);
}

function viewEchoesOfSlaughter() {
    echoesOfSlaughter.style.backgroundImage = "url('img/echoes-of-slaughter-game.png')";
    growDiv("echoes-of-slaughter", 300);
}