//By DD and Ruixin
var playercount=0;
var botcount=0;
var diflevel = "normal";
var url = "http://localhost:3000/post";//local host

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
        playercount = playercount+1; /*record history*/
        return "win";
    }
    if (randomnumber >= 4 && randomnumber < 6) {
        return "tie";
    }
    if (randomnumber >= 6) {
        botcount = botcount + 1;
        //alert(botcount);/*record history*/
        return "lose";
    }
}
//judge win or lose

function paper() { 
    generate();
    var i=judge();
    if (i == "tie") {
        document.getElementById("botchocie").setAttribute("src", "images/paper.jpg");/*need attach picture*/
        document.getElementById("botchocie").style.display = "inline";
        document.getElementById("botchocie").style.boxShadow = "0 0 2rem 0.3rem yellow";
    }
    if (i == "lose") {
        document.getElementById("botchocie").setAttribute("src", "images/scissors.jpg");/*need attach picture*/
        document.getElementById("botchocie").style.display = "inline";
        document.getElementById("botchocie").style.boxShadow = "0 0 2rem 0.3rem red";
 
    }
    if (i == "win") {
        document.getElementById("botchocie").setAttribute("src", "images/rock.jpg");/*need attach picture*/
        document.getElementById("botchocie").style.display = "inline";
        document.getElementById("botchocie").style.boxShadow = "0 0 2rem 0.3rem green";
       
    }
    document.getElementById("botcount").innerHTML = botcount;
    document.getElementById("playercount").innerHTML = playercount;
    setTimeout(response, 200);
    setTimeout(showgif, 1000);
    /*Send to server*/
    $.post(
        url+'?data='+JSON.stringify({
        'diff':diflevel,
        'symbol': "paper",
        'judge': i,
        'number':randomnumber,       
        'playercount': playercount,
        'botcount': botcount, 
        }),
        response);
    //alert(judge() + "!");/*pop up*/
}
function rock() {
    generate();
    var i = judge();
    if (i == "tie") {
        document.getElementById("botchocie").setAttribute("src", "images/rock.jpg");/*need attach picture*/
        document.getElementById("botchocie").style.display = "inline";
        document.getElementById("botchocie").style.boxShadow = "0 0 2rem 0.3rem yellow";
    }
    if (i == "lose") {
        document.getElementById("botchocie").setAttribute("src", "images/paper.jpg");/*need attach picture*/
        document.getElementById("botchocie").style.display = "inline";
        document.getElementById("botchocie").style.boxShadow = "0 0 2rem 0.3rem red";
   
    }
    if (i == "win") {
        document.getElementById("botchocie").setAttribute("src", "images/scissors.jpg");/*need attach picture*/
        document.getElementById("botchocie").style.display = "inline";
        document.getElementById("botchocie").style.boxShadow = "0 0 2rem 0.3rem green";
    }
    document.getElementById("botcount").innerHTML = botcount;
    document.getElementById("playercount").innerHTML = playercount;
    setTimeout(response, 200);
    setTimeout(showgif, 1000);
    /*Send to server*/
    $.post(
        url+'?data='+JSON.stringify({
        'diff':diflevel, 
        'symbol': "rock",
        'judge': i,
        'number':randomnumber,       
        'playercount': playercount,
        'botcount': botcount, 
        }),
        response);
}
function scissors() {
    generate();
    var i = judge();
    if (i == "tie") {
        document.getElementById("botchocie").setAttribute("src", "images/scissors.jpg");/*need attach picture*/
        document.getElementById("botchocie").style.display = "inline";
        document.getElementById("botchocie").style.boxShadow = "0 0 2rem 0.3rem yellow";
    }
    if (i == "lose") {
        document.getElementById("botchocie").setAttribute("src", "images/rock.jpg");/*need attach picture*/
        document.getElementById("botchocie").style.display = "inline";
        document.getElementById("botchocie").style.boxShadow = "0 0 2rem 0.3rem red";

    }
    if (i == "win") {
        document.getElementById("botchocie").setAttribute("src", "images/paper.jpg");/*need attach picture*/
        document.getElementById("botchocie").style.display = "inline";
        document.getElementById("botchocie").style.boxShadow = "0 0 2rem 0.3rem green";
  
    }
    document.getElementById("botcount").innerHTML = botcount;
    document.getElementById("playercount").innerHTML = playercount;
    setTimeout(response, 200);
    setTimeout(showgif, 1000);
    /*Send to server*/
    $.post(
        url+'?data='+JSON.stringify({
        'diff':diflevel,
        'symbol': "scissors", 
        'judge': i,
        'number':randomnumber,       
        'playercount': playercount,
        'botcount': botcount, 
        }),
        response);
}
/*Response function (very important)*/
function response(data){
    var response = JSON.parse(data);
    //console.log(data);
    document.getElementById("difficulty").innerHTML = response['diff'];
    if(response['playercount'] == 3){
        alert("Congratulation, You Win!");
        playercount = 0;
        botcount = 0;
        document.getElementById("playercount").innerHTML = playercount;
        document.getElementById("botcount").innerHTML = botcount;
    }
    if(response['botcount'] == 3){
        alert("Unlucky, You Lose!");
        playercount = 0;
        botcount = 0;
        document.getElementById("playercount").innerHTML = playercount;
        document.getElementById("botcount").innerHTML = botcount;
    }
}

//function check() { /*count win lose and bo3 need add async to work porperly */
    /*a = 0;
    if (playercount == 3) {
        alert("Win");
        //window.location.assign("Rock-Paper-Scissors.html");
        playercount = 0;//reset variables to 0
        botcount = 0;
        document.getElementById("playercount").innerHTML = playercount;//display them
        document.getElementById("botcount").innerHTML = botcount;
        a = a + 1;
    }
    if (botcount == 3) {
        alert("Lose");//same as above
        playercount = 0;
        botcount = 0;
        document.getElementById("playercount").innerHTML = playercount;
        document.getElementById("botcount").innerHTML = botcount;
        //window.location.assign("Rock-Paper-Scissors.html");
    }
}*/
//for all 9 situastion

///////////////////////////////////////////////////////////////////////////////////////////////


function start() { /*link to start button and the right page*/
    window.location.assign("GamingPage.html");
}

function seldif() { /*link to select difficultiy button*/
    diflevel = prompt("Please select a difficulty by entering easy/normal/hard, or something special? (Entering other words will be set to normal).");
    $.post(
        url+'?data='+JSON.stringify({
        'diff':diflevel, 
        }),
        response);
}

function quit() {/*link to history button*/
    window.location.assign("Rock-Paper-Scissors.html");
}

function showgif() {
    document.getElementById("botchocie").setAttribute("src", "images/RPS2.gif");
    document.getElementById("botchocie").style.boxShadow = "0 0 0rem 0rem";
}
//By DD