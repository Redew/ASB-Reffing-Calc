var stab = function (bonus) {
    if (bonus === true) {
        return 3;
    } else {
        return 0;
    }
};

var crit = function (stage) {
    if (stage === 0) {
        if (Math.random() <= 1 / 16) {
            return 3;
        }
    } else if (stage === 1) {
        if (Math.random() <= 1 / 8) {
            return 3;
        }
    } else if (stage === 2) {
        if (Math.random() <= 1 / 2) {
            return 3;
        }
    } else if (stage === 3) {
        if (Math.random() < 1) {
            return 3;
        }
    }
    return 0;
};

var ATR = function (atkRank) {
    if (!atkRank) atkRank = 0;
    if (atkRank <= 6) {
        atkRank = atkRank * 1.5;
    } else if (atkRank > 6) {
        atkRank = (atkRank - 6) + (6 * 1.5);
    }
    return atkRank;
};

var abilEff = function (subAdd, number) {
    var toDo = 0;
    if (subAdd === 'subtract') {
        toDo = -number;
    } else if (subAdd === 'add') {
        toDo = +number;
    }
    return toDo;
};

var fieldEff = function (subAdd, number) {
    var toCalc = 0;
    if (subAdd === 'subtract') {
        toCalc = -number;
    } else if (subAdd === 'add') {
        toCalc = +number;
    }
    return toCalc;
};

var itemEffOne = function (subAdd, number) {
    var toCalc = 0;
    if (subAdd === 'subtract') {
        toCalc = -number;
    } else if (subAdd === 'add') {
        toCalc = +number;
    }
    return toCalc;
};

var itemEffTwo = function (subAdd, number) {
    var toCalc = 0;
    if (subAdd === 'subtract') {
        toCalc = -number;
    } else if (subAdd === 'add') {
        toCalc = +number;
    }
    return toCalc;
};

var DRB = function (defRank) {
    if (!defRank) defRank = 0;
    if (defRank <= 6) {
        defRank = defRank * 1.5;
    } else if (defRank > 6) {
        defRank = (defRank - 6) + (6 * 1.5);
    }
    return defRank;
};

var burnEff = function (bonus) {
    if (bonus === true) {
        return 3;
    } else {
        return 0;
    }
};

var typeEff = function (effectiveness) {
    var goThrough = function (numb) {
        var show = numb * 100;
        var doThis = Math.round(show);
        return doThis / 100;
    };
    var returnThis = 1;
    if (effectiveness === '2') {
        returnThis = 3 / 2;
    } else if (effectiveness === '4') {
        returnThis = 9 / 4;
    } else if (effectiveness === '8') {
        returnThis = 27 / 8;
    } else if (effectiveness === '1/2') {
        returnThis = 2 / 3;
        goThrough(returnThis);
    } else if (effectiveness === '1/4') {
        returnThis = 0.44;
    } else if (effectiveness === '1/8') {
        returnThis = 0.30;
    }
    return returnThis;
};

var SBD = function (numOne, numTwo) {
    var atkDiff = numOne || 0;
    var defDiff = numTwo || 0;
    if (critVal) {
        if (atkDiff < 0) atkDiff = 0;
        if (defDiff > 0) defDiff = 0;
    }
    return atkDiff - defDiff;
};

var calculate = function() {
    var basePower = parseInt($('.bap').val()) || 0;
    var stabBonus = $('.stabBonus').prop('checked');
    var critStage = parseInt($('.critHold').val()) || 0;
    var atkRank = parseInt($('.ATR').val()) || 0;
    var abilityEffect = $('input[name=addSubAbility][value="add"]').prop("checked") ? 'add' : 'subtract'
    var abilityEffVal = parseInt($('.abilityEffectModifier').val()) || 0;
    var fieldEffect = $('input[name=addSubField][value="add"]').prop("checked") ? 'add' : 'subtract'
    var fieldEffVal = parseInt($('.fieldEffectModifier').val()) || 0;
    var itemEffectOne = $('input[name=addSubItemOne][value="add"]').prop("checked") ? 'add' : 'subtract'
    var itemEffOneVal = parseInt($('.itemEffectModifierOne').val()) || 0;
    var itemEffectTwo = $('input[name=addSubItemTwo][value="add"]').prop("checked") ? 'add' : 'subtract'
    var itemEffTwoVal = parseInt($('.itemEffectModifierTwo').val()) || 0;
    var defRank = parseInt($('.DRB').val()) || 0;
    var burnCheck = $('.burnEffect').prop('checked');
    var typeEffectivenessButton = $('input:radio[name=effect]:checked') ? $('input:radio[name=effect]:checked').val() : 1
    var atkStageBoosts = parseInt($('.attackStageBoosts').val()) || 0;
    var defStageBoosts = parseInt($('.defenseStageBoosts').val()) || 0;
    
    critVal = crit(critStage);
    
    var finalDmg = typeEffectivenessButton === '0' ? 0 : ((basePower + stab(stabBonus) + critVal + ATR(atkRank) + abilEff(abilityEffect, abilityEffVal) + fieldEff(fieldEffect, fieldEffVal) + itemEffOne(itemEffectOne, itemEffOneVal) - DRB(defRank) - burnEff(burnCheck)) * typeEff(typeEffectivenessButton)) + (SBD(atkStageBoosts, defStageBoosts) * 2) + itemEffTwo(itemEffectTwo,itemEffTwoVal);
    $('.output').text(finalDmg);
}
 var resetCalc = function() {
    $('.bap').val("");
    $('.stabBonus').prop("checked", false);
    $('.critHold').val("");
    $('.ATR').val("");
    $('input[name="addSubAbility"][value="add"]').prop("checked", true);
    $('.abilityEffectModifier').val("");
    $('input[name="addSubField"][value="add"]').prop("checked", true);
    $('.fieldEffectModifier').val("");
    $('input[name="addSubItemOne"][value="add"]').prop("checked", true);
    $('.itemEffectModifierOne').val("");
    $('input[name="addSubItemTwo"][value="add"]').prop("checked", true);
    $('.itemEffectModifierTwo').val("");
    $('.DRB').val("");
    $('.burnEffect').prop("checked", false);
    $('input[name="effect"][value="1"]').prop("checked", true);
    $('.attackStageBoosts').val("");
    $('.defenseStageBoosts').val("");
 }

$(document).ready(function () {

    resetCalc();
    $('#contributors').hide();
    $('#contributors').css({
        left: '580px',
        top: '250px',
        width: 0,
        height: 0
    });
    $('.contribs').click(function () {
        $('#contributors').toggle(function () {
            $('#contributors').animate({
                left: '420px',
                top: '200px',
                width: '400px',
                height: '250px',
                opacity: 1
            });
        });
    });

    $('.calcButton').click(calculate);    
    $('.resetButton').click(resetCalc);
});
