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
// You only need to enter in the base defense rank for the defending Pokemon here. 
var DRB = function (defRank) {
    if (defRank <= 6) {
        defRank = defRank * 1.5
    } else {
        defRank = (defRank - 6) + (6 * 1.5);
    };
    return defRank;
};
// When entering in the effectiveness, you need to put it in quotation marks. i.e. typeEff('weak') 
// typeEff('triple resist')  etc.
var typeEff = function (effectiveness) {
    if (effectiveness === 'weak') {
        effectiveness = 3 / 2;
    } else if (effectiveness === 'double weak') {
        effectiveness = 9 / 4;
    } else if (effectiveness === 'triple weak') {
        effectiveness = 27 / 8;
    } else if (effectiveness === 'resist') {
        effectiveness = 0.67;
    } else if (effectiveness === 'double resist') {
        effectiveness = 0.44;
    } else if (effectiveness === 'triple resist') {
        effectiveness = 0.30;
    } else {
        effectiveness = 1;
    }
    return effectiveness;
};
// Stage Boost Difference is the difference between the attacker's relevant Attack Stage Boosts 
// and the defender's Defense Stage Boosts
var SBD = function (boostDiff) {
    return boostDiff;
};

// THIS IS WHAT YOU NEED TO EDIT. ONLY TOUCH THIS
var finalDmg = ((bap() + stab() + crit() + ATR() - DRB()) * typeEff()) + (SBD() * 2);

// This outputs the final number.
console.log(finalDmg);
