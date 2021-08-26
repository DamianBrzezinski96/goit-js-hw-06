const inputValidation = document.querySelector("#validation-input");

function checkInputValidFn(evt)  {
    if (inputValidation.value.length !== Number(inputValidation.getAttribute("data-length"))) {
        inputValidation.classList.add('invalid');
    } else {
        inputValidation.classList.remove("invalid");
        inputValidation.classList.add("valid");
    };
};
inputValidation.addEventListener("blur", checkInputValidFn);
