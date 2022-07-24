{
    const calculateResult = (amount, currency) => {
        const MXN = 0.22;
        const MN = 0.19;
        const ARS = 0.036;
        const COP = 0.011;

        switch (currency) {
            case "MXN":
                return amount / MXN;

            case "MN":
                return amount / MN;

            case "ARS":
                return amount / ARS;

            case "COP":
                return amount / COP;
        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-form__result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-form__amount");
        const currencyElement = document.querySelector(".js-form__currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}

