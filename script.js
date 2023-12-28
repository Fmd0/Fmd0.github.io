let INIT=true; // indicate there's an operator is pressed
let result=0;  // previous operand
// let operand=0; // current operand
let operator=-1;// + - * / %
let operatorcnt=0;

const data=document.getElementById("data");

const zero=document.getElementById("zero");
const one=document.getElementById("one");
const two=document.getElementById("two");
const three=document.getElementById("three");
const four=document.getElementById("four");
const five=document.getElementById("five");
const six=document.getElementById("six");
const seven=document.getElementById("seven");
const eight=document.getElementById("eight");
const nine=document.getElementById("nine");


const plus=document.getElementById("plus");
const minus=document.getElementById("minus");
const divide=document.getElementById("divide");
const percent=document.getElementById("percent");
const symbol=document.getElementById("symbol");


const is=document.getElementById("is");
const ac=document.getElementById("ac");


function clickzero() {
    let operand=0;
    if(INIT) {
        operand=0;
        INIT=false;
    }
    else {
        operand=Number(data.innerHTML+"0")
    }
    data.innerHTML=operand;
}

function clickone() {
    let operand=0;
    if(INIT) {
        operand=1;
        INIT=false;
    }
    else {
        operand=Number(data.innerHTML+"1")
    }
    data.innerHTML=operand;
}

function clicktwo() {
    let operand=0;
    if(INIT) {
        operand=2;
        INIT=false;
    }
    else {
        operand=Number(data.innerHTML+"2")
    }
    data.innerHTML=operand;
}


function clickthree() {
    let operand=0;
    if(INIT) {
        operand=3;
        INIT=false;
    }
    else {
        operand=Number(data.innerHTML+"3")
    }
    data.innerHTML=operand;
}


function clickfour() {
    let operand=0;
    if(INIT) {
        operand=4;
        INIT=false;
    }
    else {
        operand=Number(data.innerHTML+"4")
    }
    data.innerHTML=operand;
}


function clickfive() {
    let operand=0;
    if(INIT) {
        operand=5;
        INIT=false;
    }
    else {
        operand=Number(data.innerHTML+"5")
    }
    data.innerHTML=operand;
}


function clicksix() {
    let operand=0;
    if(INIT) {
        operand=6;
        INIT=false;
    }
    else {
        operand=Number(data.innerHTML+"6")
    }
    data.innerHTML=operand;
}


function clickseven() {
    let operand=0;
    if(INIT) {
        operand=7;
        INIT=false;
    }
    else {
        operand=Number(data.innerHTML+"7")
    }
    data.innerHTML=operand;
}


function clickeight() {
    let operand=0;
    if(INIT) {
        operand=8;
        INIT=false;
    }
    else {
        operand=Number(data.innerHTML+"8")
    }
    data.innerHTML=operand;
}


function clicknine() {
    let operand=0;
    if(INIT) {
        operand=9;
        INIT=false;
    }
    else {
        operand=Number(data.innerHTML+"9")
    }
    data.innerHTML=operand;
}

function clickplus() {
    if(INIT) {
        operator=1;
        return;        
    }
    INIT=true;
    if(operatorcnt>=1) clickis();
    operator=1;
    result=Number(data.innerHTML);
    operatorcnt++;
}

function clickminus() {
    if(INIT) {
        operator=2;
        return;        
    }
    INIT=true;
    if(operatorcnt>=1) clickis();
    operator=2;
    result=Number(data.innerHTML);
    operatorcnt++;
}

function clickdivide() {
    if(INIT) {
        operator=3;
        return;        
    }
    INIT=true;
    if(operatorcnt>=1) clickis();
    operator=3;
    result=Number(data.innerHTML);
    operatorcnt++;
}

function clickmultiple() {
    if(INIT) {
        operator=4;
        return;        
    }
    INIT=true;
    if(operatorcnt>=1) clickis();
    operator=4;
    result=Number(data.innerHTML);
    operatorcnt++;
}

function clickpercent() {
    let operand=Number(data.innerHTML)
    operand/=100;
    data.innerHTML=operand;
}

function clicksymbol() {
    let operand=Number(data.innerHTML)
    operand*=-1
    data.innerHTML=operand;
}

function clickis() {
    switch(operator) {
        case 1:
            result+=Number(data.innerHTML);
            break
        case 2:
            result-=Number(data.innerHTML);
            break
        case 3:
            result/=Number(data.innerHTML);
            break
        case 4:
            result*=Number(data.innerHTML);
            break
        default:
            console.log("operator error")
    }

    data.innerHTML=result;
    operatorcnt=0;
    // result=0;
}

function clickac() {
    INIT=true;
    result=0;
    data.innerHTML=0;
}


zero.addEventListener("click", clickzero);
one.addEventListener("click", clickone);
two.addEventListener("click", clicktwo);
three.addEventListener("click", clickthree);
four.addEventListener("click", clickfour);
five.addEventListener("click", clickfive);
six.addEventListener("click", clicksix);
seven.addEventListener("click", clickseven);
eight.addEventListener("click", clickeight);
nine.addEventListener("click", clicknine);


plus.addEventListener("click", clickplus);
minus.addEventListener("click", clickminus);
divide.addEventListener("click", clickdivide);
multiple.addEventListener("click", clickmultiple);
percent.addEventListener("click", clickpercent);
symbol.addEventListener("click", clicksymbol);


is.addEventListener("click", clickis);
ac.addEventListener("click", clickac);

