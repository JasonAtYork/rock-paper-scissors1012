////By dd
var playercount = 0;
var botcount = 0;
var diflevel = "normal"; //问题根源
if (playercount == 3 || botcount == 3) {
    break;
}

function generate() {
    switch (diflevel) {
        case "normal": {
            randomnumber = Math.floor(Math.random() * 9);
            break;
        }
        case "hard": {
            randomnumber = Math.floor(Math.random() * 11);
            break;
        }
        case "easy": {
            randomnumber = Math.floor(Math.random() * 7);
            break;
        }
        case "whosyourdaddy": {
            randomnumber = Math.floor(Math.random() * 4);
            break;
        }
    }
}
//generate a number by selected difficulty
function judge() {
    if (randomnumber < 4) {
        playercount = playercount + 1; /*record history*/
        return "win";
    }
    if (randomnumber >= 4 && randomnumber < 6) {
        return "tie";
    }
    if (randomnumber >= 6) {
        botcount = botcount + 1;/*having iussue that this is counting 5 times not 1)
        alert(botcount);/*record history*/
        return "lose";
    }
}
//judge win or lose

function paper() {
    generate();
    var i = judge();
    if (i == "tie") {
        document.getElementById("botchocie").setAttribute("src", "images/paper.jpg");/*need attach picture*/
        document.getElementById("botchocie").style.display = "inline";
    }
    if (i == "lose") {
        document.getElementById("botchocie").setAttribute("src", "images/scissors.jpg");/*need attach picture*/
        document.getElementById("botchocie").style.display = "inline";
    }
    if (i == "win") {
        document.getElementById("botchocie").setAttribute("src", "images/rock.jpg");/*need attach picture*/
        document.getElementById("botchocie").style.display = "inline";

    }
    alert(i + "!");
    //alert(judge() + "!");/*pop up*/
}
function rock() {
    generate();
    var i = judge();
    if (i == "tie") {
        document.getElementById("botchocie").setAttribute("src", "images/rock.jpg");/*need attach picture*/
        document.getElementById("botchocie").style.display = "inline";
    }
    if (i == "lose") {
        document.getElementById("botchocie").setAttribute("src", "images/paper.jpg");/*need attach picture*/
        document.getElementById("botchocie").style.display = "inline";
    }
    if (i == "win") {
        document.getElementById("botchocie").setAttribute("src", "images/scissors.jpg");/*need attach picture*/
        document.getElementById("botchocie").style.display = "inline";
    }
    alert(i + "!");
}
function scissors() {
    generate();
    var i = judge();
    if (i == "tie") {
        document.getElementById("botchocie").setAttribute("src", "images/scissors.jpg");/*need attach picture*/
        document.getElementById("botchocie").style.display = "inline";
    }
    if (i == "lose") {
        document.getElementById("botchocie").setAttribute("src", "images/rock.jpg");/*need attach picture*/
        document.getElementById("botchocie").style.display = "inline";
    }
    if (i == "win") {
        document.getElementById("botchocie").setAttribute("src", "images/paper.jpg");/*need attach picture*/
        document.getElementById("botchocie").style.display = "inline";
    }
    alert(i + "!");
}
//for all 9 situastion

///////////////////////////////////////////////////////////////////////////////////////////////


function start() { /*link to start button and the right page*/
    window.location.assign("GamingPage.html");
}
function Restart() { /*link to restart button*/
    playercount = 0;
    botcount = 0;
}
function seldif() { /*link to select difficultiy button*/
    diflevel = prompt("please enter a difficiculty(From Easy;Normal;Hard)");
}

function history() {/*link to history button*/
    window.location.assign("History.html");
    //document.getElementById("xxxx").innerHTML;/*need attach div the show history*/
}

function showhis() {/*only for testing*/
    alert(playercount / 5 + " : " + botcount / 5);
}

function back() {/*link to history button*/
    window.location.assign("test page.html");
}

function quit() {/*link to history button*/
    window.location.assign("Rock-Paper-Scissors.html");
}
//By DD