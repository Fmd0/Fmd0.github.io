let OPERANDINIT=true; 
// 之前按的键是加减乘除

let ISINIT=true;
// 之前按的键是等号

let result=0;  // previous result

let preoperand=0; // previous operand

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
    if(ISINIT || OPERANDINIT) {
        operand=0;
        ISINIT=false;
        OPERANDINIT=false;
    }
    else {
        operand=Number(data.innerHTML+"0")
    }
    data.innerHTML=operand;
}

function clickone() {
    let operand=0;
    if(ISINIT || OPERANDINIT) {
        operand=1;
        ISINIT=false;
        OPERANDINIT=false;
    }
    else {
        operand=Number(data.innerHTML+"1")
    }
    data.innerHTML=operand;
}

function clicktwo() {
    let operand=0;
    if(ISINIT || OPERANDINIT) {
        operand=2;
        ISINIT=false;
        OPERANDINIT=false;
    }
    else {
        operand=Number(data.innerHTML+"2")
    }
    data.innerHTML=operand;
}


function clickthree() {
    let operand=0;
    if(ISINIT || OPERANDINIT) {
        operand=3;
        ISINIT=false;
        OPERANDINIT=false;
    }
    else {
        operand=Number(data.innerHTML+"3")
    }
    data.innerHTML=operand;
}


function clickfour() {
    let operand=0;
    if(ISINIT || OPERANDINIT) {
        operand=4;
        ISINIT=false;
        OPERANDINIT=false;
    }
    else {
        operand=Number(data.innerHTML+"4")
    }
    data.innerHTML=operand;
}


function clickfive() {
    let operand=0;
    if(ISINIT || OPERANDINIT) {
        operand=5;
        ISINIT=false;
        OPERANDINIT=false;
    }
    else {
        operand=Number(data.innerHTML+"5")
    }
    data.innerHTML=operand;
}


function clicksix() {
    let operand=0;
    if(ISINIT || OPERANDINIT) {
        operand=6;
        ISINIT=false;
        OPERANDINIT=false;
    }
    else {
        operand=Number(data.innerHTML+"6")
    }
    data.innerHTML=operand;
}


function clickseven() {
    let operand=0;
    if(ISINIT || OPERANDINIT) {
        operand=7;
        ISINIT=false;
        OPERANDINIT=false;
    }
    else {
        operand=Number(data.innerHTML+"7")
    }
    data.innerHTML=operand;
}


function clickeight() {
    let operand=0;
    if(ISINIT || OPERANDINIT) {
        operand=8;
        ISINIT=false;
        OPERANDINIT=false;
    }
    else {
        operand=Number(data.innerHTML+"8")
    }
    data.innerHTML=operand;
}


function clicknine() {
    let operand=0;
    if(ISINIT || OPERANDINIT) {
        operand=9;
        ISINIT=false;
        OPERANDINIT=false;
    }
    else {
        operand=Number(data.innerHTML+"9")
    }
    data.innerHTML=operand;
}

function clickplus() {
    if(OPERANDINIT) {
        operator=1;
        return;        
    }
    OPERANDINIT=true;
    ISINIT=false;
    if(operatorcnt>=1) clickis();
    operator=1;
    result=Number(data.innerHTML);
    operatorcnt++;
}

function clickminus() {
    if(OPERANDINIT) {
        operator=2;
        return;        
    }
    OPERANDINIT=true;
    ISINIT=false;
    if(operatorcnt>=1) clickis();
    operator=2;
    result=Number(data.innerHTML);
    operatorcnt++;
}

function clickdivide() {
    if(OPERANDINIT) {
        operator=3;
        return;        
    }
    OPERANDINIT=true;
    ISINIT=false;
    if(operatorcnt>=1) clickis();
    operator=3;
    result=Number(data.innerHTML);
    operatorcnt++;
}

function clickmultiple() {
    if(OPERANDINIT) {
        operator=4;
        return;        
    }
    OPERANDINIT=true;
    ISINIT=false;
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
    if(OPERANDINIT) {
        preoperand=result;
        switch(operator) {
            case 1:
                result+=result;
                break
            case 2:
                result-=result;
                break
            case 3:
                result/=result;
                break
            case 4:
                result*=result;
                break
            default:
                console.log("operator error")
        }
        OPERANDINIT=false;
        ISINIT=true;
        data.innerHTML=result;
        return;
    }

    if(ISINIT) {
        switch(operator) {
            case 1:
                result+=preoperand;
                break
            case 2:
                result-=preoperand;
                break
            case 3:
                result/=preoperand;
                break
            case 4:
                result*=preoperand;
                break
            default:
                console.log("operator error")
        }
        OPERANDINIT=false;
        ISINIT=true;
        data.innerHTML=result;
        return;
    }

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
    ISINIT=true;
    OPERANDINIT=false;
    preoperand=Number(data.innerHTML);
    data.innerHTML=result;
    operatorcnt=0;
    // result=0;
}

function clickac() {
    OPERANDINIT=true;
    ISINIT=true;
    operatorcnt=0;
    result=0;
    preoperand=0;
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
 
