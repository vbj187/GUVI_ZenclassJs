var team = /** @class */ (function () {
    function team() {
        this.wickets = 10;
        this.overs = 5;
    }
    return team;
}());
var player = /** @class */ (function () {
    function player() {
        this.balls = 6;
        this.runs = [];
        this.total = 0;
    }
    player.prototype.run = function () {
        var hit = Math.floor(Math.random() * 100 % 7);
        if (hit > 0) {
            return hit;
        }
        else {
            return -1;
        }
    };
    return player;
}());
var team1ScoreCard = [];
var click = 0;
var plyIndex = 0;
var tem1 = new team();
var batsman = 0;
var team1Result = [];
var team2Result = [];
var winner = [];
var team2ScoreCard = [];
var tem2 = new team();
/*function run(){
    let hit = Math.floor(Math.random() * 100 % 7);
    if(hit>0){
        return hit;
    }
    else{
        return -1;
    }
}*/
function sumIt(total, num) {
    return total + num;
}
function team1Play() {
    if (click <= 12 && plyIndex < 10) {
        var chk = team1ScoreCard[plyIndex].run();
        if (chk > 0) {
            batsman = team1ScoreCard[plyIndex];
            if (batsman.balls > 0) {
                batsman.runs.push(chk);
                batsman.balls -= 1;
                document.getElementById("tem1Board").innerHTML += " " + batsman.runs[batsman.runs.length - 1];
                //alert(batsman.runs);
                alert("balls remaining: " + batsman.balls);
                if (batsman.balls == 0 || click == 12) {
                    plyIndex += 1;
                    tem1.wickets -= 1;
                    document.getElementById("tem1Board").innerHTML += "<br>";
                    alert("Over Up");
                }
            }
        }
        else {
            batsman = team1ScoreCard[plyIndex];
            batsman.runs.push(0);
            batsman.balls -= 1;
            document.getElementById("tem1Board").innerHTML += " W ";
            document.getElementById("tem1Board").innerHTML += "<br>";
            //alert(batsman.runs);
            //alert(batsman.balls);
            plyIndex += 1;
            tem1.wickets -= 1;
            alert("Batsman Out");
            alert("Next Batsman");
        }
    }
    else {
        for (i = 0; i < plyIndex; i++) {
            team1ScoreCard[i].total = team1ScoreCard[i].runs.reduce(sumIt);
            team1Result[i] = team1ScoreCard[i].total;
        }
        localStorage.setItem("team1Runs", team1Result);
        localStorage.setItem("team1Total", team1Result.reduce(sumIt));
        localStorage.setItem("playerObj", JSON.stringify(team1ScoreCard));
        document.getElementById("tem1Board").innerHTML += "Overs: 2<br>" + "Total runs: " + team1Result.reduce(sumIt);
        //alert(team1Result);
        click = 0;
        plyIndex = 0;
        document.getElementById("team1").disabled = true;
        document.getElementById("team2").disabled = false;
        alert("2 overs up");
    }
}
function team2Play() {
    if (click <= 12 && plyIndex < 10) {
        var chk = team2ScoreCard[plyIndex].run();
        if (chk > 0) {
            batsman = team2ScoreCard[plyIndex];
            if (batsman.balls > 0) {
                batsman.runs.push(chk);
                batsman.balls -= 1;
                document.getElementById("tem2Board").innerHTML += " " + batsman.runs[batsman.runs.length - 1];
                //alert(batsman.runs);
                alert("balls remaining: " + batsman.balls);
                if (batsman.balls == 0 || click == 12) {
                    plyIndex += 1;
                    tem2.wickets -= 1;
                    document.getElementById("tem2Board").innerHTML += "<br>";
                    alert("Over Up");
                }
            }
        }
        else {
            batsman = team2ScoreCard[plyIndex];
            batsman.runs.push(0);
            batsman.balls -= 1;
            document.getElementById("tem2Board").innerHTML += " W ";
            document.getElementById("tem2Board").innerHTML += "<br>";
            //alert(batsman.runs);
            //alert(batsman.balls);
            plyIndex += 1;
            tem2.wickets -= 1;
            alert("Batsman Out");
            alert("Next Batsman");
        }
    }
    else {
        for (i = 0; i < plyIndex; i++) {
            team2ScoreCard[i].total = team2ScoreCard[i].runs.reduce(sumIt);
            team2Result[i] = team2ScoreCard[i].total;
        }
        localStorage.setItem("team2Runs", team2Result);
        localStorage.setItem("team2Total", team2Result.reduce(sumIt));
        localStorage.setItem("player2Obj", JSON.stringify(team2ScoreCard));
        document.getElementById("tem2Board").innerHTML += "Overs: 2<br>" + "Total runs: " + team2Result.reduce(sumIt);
        //alert(team2Result);
        click = 0;
        plyIndex = 0;
        document.getElementById("team2").disabled = true;
        alert("2 overs up");
        winner.push(team1Result.reduce(sumIt));
        winner.push(team2Result.reduce(sumIt));
        var res = "";
        if (winner[0] > winner[1]) {
            res = "Team A is winner";
        }
        else if (winner[0] == winner[1]) {
            res = "Draw Match";
        }
        else {
            res = "Team B is winner";
        }
        localStorage.setItem("winner", res);
        //alert(res);
        alert("Match over");
        location.replace("file:///C:/Users/User/Desktop/GUVI/Class_Tasks/cricketgame/crctcls.html");
    }
}
function ballClick(idtity) {
    click += 1;
    if (idtity.id == "team1") {
        if (click == 1) {
            for (i = 0; i < tem1.wickets; i++) {
                team1ScoreCard[i] = new player();
            }
        }
        team1Play();
    }
    else {
        if (click == 1) {
            for (i = 0; i < tem2.wickets; i++) {
                team2ScoreCard[i] = new player();
            }
        }
        team2Play();
    }
}
