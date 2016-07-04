var score = 0;
var eggs = 0;
var upgrade = 1;
var prix = 50;
var prix2 = 100;
var autoclicker = 0;
var nbAutoclick = 0;


function clicOnChicken() {
    score = score + upgrade;
    eggs = eggs + upgrade;
    document.getElementById("affichage-score").innerHTML = eggs;
    document.getElementById("total-eggs").innerHTML = score;
    console.log(eggs);
}

function buy() {
    if (eggs >= prix) {
        eggs = eggs - prix;
        document.getElementById("affichage-score").innerHTML = eggs;
        upgrade = upgrade + 1;
        document.getElementById("nbr-multi").innerHTML = upgrade;
        prix = prix * 1.5;
        document.getElementById("price").innerHTML = prix;
    } else {
        alert("nop !");
    }
}

function buyAutoclick() {
    if (eggs >= prix2) {
        eggs = eggs - prix2;
        document.getElementById("affichage-score").innerHTML = eggs;
        nbAutoclick = nbAutoclick + 1;
        document.getElementById("nbAutoclick").innerHTML = nbAutoclick;
        prix2 = prix2 * 1.5;
        document.getElementById("price2").innerHTML = prix2;
    } else {
        alert("nop !");
    }
}

// autoclickeur - ceci ne fonctionne pour le moment, à appraufondir ! ! ! !
switch (nbAutoclick) {
case 1:
    autoclicker = setInterval(clicOnChicken, 480);
    break;
case 2:
    autoclicker = setInterval(clicOnChicken, 240);
    break;
case 3:
    autoclicker = setInterval(clicOnChicken, 120);
    break;
case 4:
    autoclicker = setInterval(clicOnChicken, 60);
    break;
case 5:
    autoclicker = setInterval(clicOnChicken, 30);
    break;
case 6:
    autoclicker = setInterval(clicOnChicken, 15);
    break;
case 7: // ON PEUT FAIRE "case >7:" ?????????????????
    autoclicker = setInterval(clicOnChicken, 0);
    break;
default:
    autoclicker = 0;
}

// en attendant : autoclickeur de substitution :
autoclicker = setInterval(clicOnChicken, 480);