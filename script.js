/********THIS IS HOW TO WORK THIS PROGRAM. READ IT.********
        Steps:
            ctrl + a (highlights everything)
            ctrl + c (copies everything highlighted)
            ctrl + shift + j (opens the JavaScrpt console)
            ctrl + v (pastes everything in the console)
            EDIT THE RELEVANT DATA
            PUSH ENTER
            
            IF YOU PUSH ENTER EARLY AND MESS UP, PUSH THE UP BUTTON AND CONTINUE EDITING
*/

// Base Attack Power. This is the base power of the move you are using.
var bap = function (power) {
    return power;
};
// stab() is automatically set to false. Set it to true if you want the STAB bonus.
var stab = function (bonus) {
    if (bonus === true) {
        bonus = 3;
    } else {
        bonus = 0;
    };
    return bonus;
};
// crit() takes no arguments. It randomly generates the crit chance, and if it is true, returns 3.
// HOW TO EDIT CRIT CHANCE: make 'if (Math.random() <= 1 / 16) {' = 'if (8 === 8) {' EXACTLY
var crit = function () {
    if (Math.random() <= 1 / 16) {
        chance = 3;
    } else {
        chance = 0;
    };
    return chance;
};
// You only need to enter in the base attack rank for the attacking Pokemon here. 
var ATR = function (atkRank) {
    if (atkRank <= 6) {
        atkRank = atkRank * 1.5
    } else {
        atkRank = (atkRank - 6) + (6 * 1.5);
    };
    return atkRank;
};
// This works like typeEff(). The first argument is the string 'add' or 'subtract'.
// If left blank it will just add 0. The second argument is what you want to add/subtract. 1, 3, 7, etc.
var abilEff = function(subAdd, number) {
    if (subAdd === 'subtract') {
        toDo = - number;
    } else if (subAdd === 'add') {
        toDo = + number;
    } else {
        toDo = + 0;
    }
    return toDo;
};
// Field effects take place when there is rain/sun/certain ASB fields/etc.
var fieldEff = function(subAdd, number) {
    if (subAdd === 'subtract') {
        toCalc = - number;
    } else if (subAdd === 'add') {
        toCalc = + number;
    } else {
        toCalc = + 0;
    }
    return toCalc;
};
// Input any number for a BAP boost/decrease. If left blank, adds 0.
var itemEffOne = function(subAdd, number) {
    if (subAdd === 'subtract') {
        toCalc = - number;
    } else if (subAdd === 'add') {
        toCalc = + number;
    } else {
        toCalc = + 0;
    }
    return toCalc;
};
// Input any number for a power boost/decrease. If left blank, adds 0.
var itemEffTwo = function(subAdd, number) {
    if (subAdd === 'subtract') {
        toCalc = - number;
    } else if (subAdd === 'add') {
        toCalc = + number;
    } else {
        toCalc = + 0;
    }
    return toCalc;
};
// You only need to enter in the base defense rank for the defending Pokemon here. 
var DRB = function (defRank) {
    if (defRank <= 6) {
        defRank = defRank * 1.5;
    } else {
        defRank = (defRank - 6) + (6 * 1.5);
    }
    return defRank;
};
// If left blank, this is false (adds 0). If true, it subtracts 3.
var burnEff = function (bonus) {
    if (bonus === true) {
        answer = 3;
    } else {
        answer = 0;
    };
    return answer;
};
// When entering in the effectiveness, you need to put it in quotation marks. i.e. typeEff('weak') 
// typeEff('triple resist')  etc.
// Note: I'M STILL WORKING ON THIS PART. SOME OF IT MAY BE BUGGY.
var typeEff = function (effectiveness) {
    var goThrough = function(numb) {
        var show = numb * 100;
        var doThis = Math.round(show);
        return doThis / 100;
    };
    if (effectiveness === 'weak') {
        returnThis = 3 / 2;
    } else if (effectiveness === 'double weak') {
        returnThis = 9 / 4;
    } else if (effectiveness === 'triple weak') {
        returnThis = 27 / 8;
    } else if (effectiveness === 'resist') {
        returnThis = 2 / 3
        goThrough(returnThis);
    } else if (effectiveness === 'double resist') {
        returnThis = 0.44;
    } else if (effectiveness === 'triple resist') {
        returnThis = 0.30;
    } else {
        returnThis = 1;
    }
    return returnThis;
};
// Stage Boost Difference is the difference between the attacker's relevant Attack Stage Boosts 
// and the defender's Defense Stage Boosts
var SBD = function (boostDiff) {
    return boostDiff;
};

// THIS IS WHAT YOU NEED TO EDIT. ONLY TOUCH THIS
var finalDmg = ((bap() + stab() + crit() + ATR() + abilEff() + fieldEff() + itemEffOne() - DRB() - burnEff()) * typeEff()) + (SBD() * 2) + itemEffTwo();

// This outputs the final number.
console.log(finalDmg);
