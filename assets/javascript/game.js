var guesses = document.getElementById("guesses");
var secret = document.getElementById("secret");
var win = document.getElementById("win");
var lose = document.getElementById("losses");

var q = document.getElementById("q");
var w = document.getElementById("w");
var e = document.getElementById("e");
var r = document.getElementById("r");
var t = document.getElementById("t");
var y = document.getElementById("y");
var u = document.getElementById("u");
var i = document.getElementById("i");
var o = document.getElementById("o");
var p = document.getElementById("p");

var winCount = 0;
win.textContent = winCount;
function wCount(){
    winCount++;
    win.textContent = winCount;
}

var loseCount = 0;
lose.textContent = loseCount;
function lCount(){
    loseCount++;
    lose.textContent = loseCount;
}


var guessesCount = 10;
guesses.textContent = guessesCount;
function gCount(){
    guessesCount--;
    guesses.textContent = guessesCount;

}
function gReset(){
    guessesCount = 10;
    guesses.textContent = guessesCount;
}

function changeStyle(event){
    (event).style.background = "#bebebe";
    (event).style.color = "#fefefe";
}

function resetStyle(event){
    (event).style.background = "#f2e3aa";
    (event).style.color = "black";
}




var random = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

var secretValue = (random[Math.floor(Math.random() * random.length)]);
   
function randomFunction (){
    secretValue = (random[Math.floor(Math.random() * random.length)]);
    
}

var q1 = true;
var w1 = true;
var e1 = true;
var r1 = true;
var t1 = true;
var y1 = true;
var u1 = true;
var i1 = true;
var o1 = true;
var p1 = true;

var a1 = true;
var s1 = true;
var d1 = true;
var f1 = true;
var g1 = true;
var h1 = true;
var j1 = true;
var k1 = true;
var l1 = true;

var z1 = true;
var x1 = true;
var c1 = true;
var v1 = true;
var b1 = true;
var n1 = true;
var m1 = true;

function lReset(){
    q1 = true;
    w1 = true;
    e1 = true;
    r1 = true;
    t1 = true;
    y1 = true;
    u1 = true;
    i1 = true;
    o1 = true;
    p1 = true;

    a1 = true;
    s1 = true;
    d1 = true;
    f1 = true;
    g1 = true;
    h1 = true;
    j1 = true;
    k1 = true;
    l1 = true;

    z1 = true;
    x1 = true;
    c1 = true;
    v1 = true;
    b1 = true;
    n1 = true;
    m1 = true;
}

document.onkeyup = function(event){
    var letter = event.key.toLowerCase();
    console.log(letter);
    
    if (letter === "q" && q1 === true){
        q1 = false;
        gCount();
        changeStyle(q);
    }
    if (letter === "w" && w1 === true){
        w1 = false;
        gCount();
        changeStyle(w);
    }
    if (letter === "e" && e1 === true){
        e1 = false;
        gCount();
        changeStyle(e);
    }
    if (letter === "r" && r1 === true){
        r1 = false;
        gCount();
        changeStyle(r);
    }
    if (letter === "t" && t1 === true){
        t1 = false;
        gCount();
        changeStyle(t);
    }
    if (letter === "y" && y1 === true){
        y1 = false;
        gCount();
        changeStyle(y);
    }
    if (letter === "u" && u1 === true){
        u1 = false;
        gCount();
        changeStyle(u);
    }
    if (letter === "i" && i1 === true){
        i1 = false;
        gCount();
        changeStyle(i);
    }
    if (letter === "o" && o1 === true){
        o1 = false;
        gCount();
        changeStyle(o);
    }
    if (letter === "p" && p1 === true){
        p1 = false;
        gCount();
        changeStyle(p);
    }





    if (letter === "a" && a1 === true){
        a1 = false;
        gCount();
        changeStyle(a);
    }
    if (letter === "s" && s1 === true){
        s1 = false;
        gCount();
        changeStyle(s);
    }
    if (letter === "d" && d1 === true){
        d1 = false;
        gCount();
        changeStyle(d);
    }
    if (letter === "f" && f1 === true){
        f1 = false;
        gCount();
        changeStyle(f);
    }
    if (letter === "g" && g1 === true){
        g1 = false;
        gCount();
        changeStyle(g);
    }
    if (letter === "h" && h1 === true){
        h1 = false;
        gCount();
        changeStyle(h);
    }
    if (letter === "j" && j1 === true){
        j1 = false;
        gCount();
        changeStyle(j);
    }
    if (letter === "k" && k1 === true){
        k1 = false;
        gCount();
        changeStyle(k);
    }
    if (letter === "l" && l1 === true){
        l1 = false;
        gCount();
        changeStyle(l);
    }




    if (letter === "z" && z1 === true){
        z1 = false;
        gCount();
        changeStyle(z);
    }
    if (letter === "x" && x1 === true){
        x1 = false;
        gCount();
        changeStyle(x);
    }
    if (letter === "c" && c1 === true){
        c1 = false;
        gCount();
        changeStyle(c);
    }
    if (letter === "v" && v1 === true){
        v1 = false;
        gCount();
        changeStyle(v);
    }
    if (letter === "b" && b1 === true){
        b1 = false;
        gCount();
        changeStyle(b);
    }
    if (letter === "n" && n1 === true){
        n1 = false;
        gCount();
        changeStyle(n);
    }
    if (letter === "m" && m1 === true){
        m1 = false;
        gCount();
        changeStyle(m);
    }
        
    
    if (letter === secretValue){
        alert("You guessed the letter " + secretValue);
        randomFunction();
        wCount();
        gReset();
        lReset();
        resetStyle(q);
        resetStyle(w);
        resetStyle(e);
        resetStyle(r);
        resetStyle(t);
        resetStyle(y);
        resetStyle(u);
        resetStyle(i);
        resetStyle(o);
        resetStyle(p);

        resetStyle(a);
        resetStyle(s);
        resetStyle(d);
        resetStyle(f);
        resetStyle(g);
        resetStyle(h);
        resetStyle(j);
        resetStyle(k);
        resetStyle(l);

        resetStyle(z);
        resetStyle(x);
        resetStyle(c);
        resetStyle(v);
        resetStyle(b);
        resetStyle(n);
        resetStyle(m);
        
    
        
    } else if (guessesCount <= 0){
        alert("You didn't guessed the letter " + secretValue);
        lCount();
        gReset();
        randomFunction();
        lReset();
        resetStyle(q);
        resetStyle(w);
        resetStyle(e);
        resetStyle(r);
        resetStyle(t);
        resetStyle(y);
        resetStyle(u);
        resetStyle(i);
        resetStyle(o);
        resetStyle(p);

        resetStyle(a);
        resetStyle(s);
        resetStyle(d);
        resetStyle(f);
        resetStyle(g);
        resetStyle(h);
        resetStyle(j);
        resetStyle(k);
        resetStyle(l);

        resetStyle(z);
        resetStyle(x);
        resetStyle(c);
        resetStyle(v);
        resetStyle(b);
        resetStyle(n);
        resetStyle(m);
    } 

    

    
}

