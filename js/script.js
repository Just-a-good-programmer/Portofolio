const eenmaalAndermaal = document.getElementById("eenmaal-andermaal");
const pinkGoose = document.getElementById("pink-goose");
const mastermind = document.getElementById("mastermind");
const portfolioWebsite = document.getElementById("portfolio-website");
const spaceRaiders = document.getElementById("space-raiders");
const echoesOfSlaughter = document.getElementById("echoes-of-slaughter");


function viewEenmaalAndermaal() {
    eenmaalAndermaal.classList.toggle("expanded");
    eenmaalAndermaal.style.backgroundImage = "url('../img/eenmaal-andermaal-title.png')";
}

function viewPinkGoose() {
    pinkGoose.classList.toggle("expanded");
    pinkGoose.style.backgroundImage = "url('../img/pink-goose-title.png')";
}

function viewMastermind() {
    mastermind.classList.toggle("expanded");
    mastermind.style.backgroundImage = "url('../img/mastermind-title.png')";
}

function viewPortfolioWebsite() {;
    alert("Did... you seriously just try to view the portfolio website from within the portfolio website?");
}

function viewSpaceRaiders() {
    spaceRaiders.classList.toggle("expanded");
    spaceRaiders.style.backgroundImage = "url('../img/space-raiders-title.png')";
}

function viewEchoesOfSlaughter() {
    echoesOfSlaughter.classList.toggle("expanded");
    echoesOfSlaughter.style.backgroundImage = "url('../img/echoes-of-slaughter-title.png')";

}