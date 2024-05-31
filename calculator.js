numbers = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
}

let finalResult = 0.0;
let operator = "";
let activeOperator = false;
let equalLastClick = false;


const calculate = () => {
    actual = parseFloat($('.result').text());
    switch (operator) {
        case('add') :
            finalResult += actual;
            finalResult = finalResult.toFixed(6);
            break;
        case('subtract'):
            finalResult -= actual;
            finalResult = finalResult.toFixed(6);
            break;
        case('multiply'):
            finalResult *= actual;
            finalResult = finalResult.toFixed(6);
            break;
        case('division'):
            number = finalResult / actual; 
            finalResult = number.toFixed(6);
            break;
        default:
            break;
    }
    if(finalResult % 1 === 0) {
        finalResult = Math.round(finalResult);
    }
}

const checkEmptyResult = () => {
    return $('.result').text() === '';
}

const firstChar = () => {
    return $('.result').text().charAt(0);
}

const hasChar = char => {
    result = $('.result').text();
    return result.indexOf(char) !== -1;
}

const append = text => {
    result = $('.result').text();
    $('.result').text(result + text);
}




$('#ac').click(() => { 
    equalLastClick = false;
    $('.result').text('0');
    finalResult = 0.0;
    operator = '';
    activeOperator = false;
})

$('#sign').click(() => {
    equalLastClick = false;
    if(firstChar() ==='-'){
        result = $(".result").text();
        substring = result.substring(1,result.length);
        $(".result").text(substring);
    }
    else if(!checkEmptyResult()) {
        result = $('.result').text();
        $('.result').text('-' + result);
    }
})

$("#percentage").click(() => {
    equalLastClick = false;
    if(!checkEmptyResult()) {
        newresult = parseFloat($(".result").text())/100;
        $(".result").text(newresult);
        finalResult = newresult;
    }
})

$(".operator").click(x=> {
    equalLastClick = false;
    id = x.target.id;
    if(id === "equals") {
        calculate();
        $('.result').text(finalResult);
        operator = '';
        activeOperator = false;
        equalLastClick = true;
    }
    else if(finalResult != 0) {
        calculate();
        $('.result').text(finalResult);
        operator = id;
        activeOperator = true;
        // $('#'+id).css('color', 'rgb(252, 141, 12)');
        // $('#'+id).css('background-color', 'white');
    }
    else {
        operator = id;
        activeOperator = true;
        // $('#'+id).css('color', 'rgb(252, 141, 12)');
        // $('#'+id).css('background-color', 'white');
    }
})

$('.number').click(x=> {
    id = x.target.id;
    num = numbers[id];

    if(activeOperator) {
        finalResult = parseFloat($('.result').text());
        $('.result').text(num);
        // $('#'+operator).css('color', 'white');
        // $('#'+operator).css('background-color', 'rgb(242,141,12');
        activeOperator = false;
    }
    else {
        if(parseFloat($('.result').text())/1 === 0 && $('.result').text().charAt(1) != '.') {
            $('.result').text('');
        }
        if(equalLastClick) {
            equalLastClick = false;
        $('.result').text('');
        finalResult = 0.0;
        operator = '';
        activeOperator = false;
        }
        append(num);
    }
})

$('.decimal').click(() => {
    if(equalLastClick) {
        $('.result').text('0');
    }
    append('.');
    equalLastClick = false;
})