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

var SBD = function() {
    if (critVal) {
        if (atkStageBoosts < 0) atkStageBoosts = 0;
        if (defStageBoosts > 0) defStageBoosts = 0;
    }
    return atkStageBoosts - defStageBoosts;
};

var atkStageBoosts = 0;
var defStageBoosts = 0;

var calculate = function () {
    var basePower = Number($('.bap').val()) || 0;
    var stabBonus = stab($('.stabBonus').prop('checked'));
    var critStage = Number($('.critHold').val()) || 0;
    critVal = crit(critStage);
    var atkRank = ATR(Number($('.ATR').val()) || 0);
    var abilityEffect = $('input[name=addSubAbility][value="add"]').prop("checked") ? 'add' : 'subtract'
    var abilityEffVal = abilEff(abilityEffect, Number($('.abilityEffectModifier').val()) || 0);
    var fieldEffect = $('input[name=addSubField][value="add"]').prop("checked") ? 'add' : 'subtract'
    var fieldEffVal = fieldEff(fieldEffect, Number($('.fieldEffectModifier').val()) || 0);
    var itemEffectOne = $('input[name=addSubItemOne][value="add"]').prop("checked") ? 'add' : 'subtract'
    var itemEffOneVal = itemEffOne(itemEffectOne, Number($('.itemEffectModifierOne').val()) || 0);
    var itemEffectTwo = $('input[name=addSubItemTwo][value="add"]').prop("checked") ? 'add' : 'subtract'
    var itemEffTwoVal = itemEffTwo(itemEffectTwo, Number($('.itemEffectModifierTwo').val()) || 0);
    var defRank = DRB(Number($('.DRB').val()) || 0);
    var burnCheck = burnEff($('.burnEffect').prop('checked'));
    var typeEffectivenessButton = typeEff($('input:radio[name=effect]:checked') ? $('input:radio[name=effect]:checked').val() : 1);
    atkStageBoosts = Number($('.attackStageBoosts').val()) || 0;
    defStageBoosts = Number($('.defenseStageBoosts').val()) || 0;
    var boostDiff = SBD();
    
    var finalDmg = typeEffectivenessButton === '0' ? 0 : ((basePower + stabBonus + critVal + atkRank + abilityEffVal + fieldEffVal + itemEffOneVal - defRank - burnCheck) * typeEffectivenessButton) + (boostDiff * 2) + itemEffTwoVal;
    $('.output').text(finalDmg);
    var rawOutput = '<br /><br />Raw: ((';
    rawOutput += (basePower ? basePower : '');
    rawOutput += (stabBonus ? ' + ' + stabBonus : '');
    rawOutput += (critVal ? ' + 3 ' : '');
    rawOutput += (atkRank ? ' + ' + atkRank : '');
    rawOutput += (abilityEffVal ? (abilityEffect === 'subtract' ? ' - ' : ' + ') + (abilityEffVal < 0 ? abilityEffVal * -1 : abilityEffVal) : '');
    rawOutput += (fieldEffVal ? (fieldEffect === 'subtract' ? ' - ' : ' + ') + (fieldEffVal < 0 ? fieldEffVal * -1 : fieldEffVal) : '');
    rawOutput += (itemEffOneVal ? (itemEffectOne === 'subtract' ? ' - ' : ' + ') + (itemEffOneVal < 0 ? itemEffOneVal * -1 : itemEffOneVal) : '');
    rawOutput += (defRank ? ' - ' + defRank : '');
    rawOutput += (burnCheck ? ' - 3) ' : ')');
    rawOutput += (typeEffectivenessButton ? ' * ' + typeEffectivenessButton + ') ' : '');
    rawOutput += (boostDiff ? ' + (' + atkStageBoosts + ' - ' + defStageBoosts + ' * 2 )' : '');
    rawOutput += (itemEffTwoVal ? (itemEffectTwo === 'subtract' ? ' - ' : ' + ') + (itemEffTwoVal < 0 ? itemEffTwoVal * -1 : itemEffTwoVal) : '');
    $('.output').append(rawOutput + ' = ' + finalDmg);
}

var resetCalc = function () {
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
    $('.output').text('');
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
