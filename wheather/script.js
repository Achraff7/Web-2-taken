const select = document.querySelector('select');
// const html = document.querySelector('.output');
const html = document.querySelector('body');

function updateBgTextColor(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

select.onchange = function () {
    const choice = select.value;
    console.log('optie', choice);

    // ADD SWITCH STATEMENT
    // HIERBOVEN NIETS VERANDEREN
    // je code met switch case komt vanaf hier:


    // tot hier
    // HIERONDER NIETS VERANDEREN
    switch (choice) {
        case "sunny": {
            updateBgTextColor('yellow', 'black');
        }
            break;
        case "rainy": {
            updateBgTextColor('blue', 'white');
        }
            break;
        case "snowing": {
            updateBgTextColor('white', 'black')
        }
            break;
        case "overcast": {
            updateBgTextColor('grey', 'white')
        }
    }
}