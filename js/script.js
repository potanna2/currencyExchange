let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-form__amount");
let currencyElement = document.querySelector(".js-form__currency");
let resultElement = document.querySelector(".js-form__result");

let mxn = 0.22;
let mn = 0.19;
let ars = 0.036;
let cop = 0.011;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let result;

    switch (currency) {
        case "mxn":
            result = amount / mxn;
            break;

        case "mn":
            result = amount / mn;
            break;

        case "ars":
            result = amount / ars;
            break;

        case "cop":
            result = amount / cop;
            break;
    }

    resultElement.innerText = result.toFixed(2);
});


