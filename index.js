const btnDecrease = document.querySelector(".btn__decrease");
const btnIncrease = document.querySelector(".btn__increase");
const inputCont = document.querySelector(".counter input");
const btnSubmit = document.querySelector(".btn__submit");
const sucess = document.querySelector(".footer p");

const allCheckbox = Array.from(document.querySelectorAll(".form input[type='checkbox']"));


// Event click decrease value sticker button
btnDecrease.addEventListener("click", (e) => {
    e.preventDefault();

    if (inputCont.value > 0)
        inputCont.value = parseInt(inputCont.value) - 1;

    validationCont();
});

// Event click increase value sticker button
btnIncrease.addEventListener("click", (e) => {
    e.preventDefault();
    inputCont.classList.remove("input__error");

    inputCont.value = parseInt(inputCont.value) + 1;

    validationCont();
});

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    validationCheckbox();
});

// Validation decrease sticker button
function validationCont() {
    if (inputCont.value <= 0) {
        btnDecrease.classList.add("btn__disabled");
    } else {
        btnDecrease.classList.remove("btn__disabled");
    }
};

// Validation checkbox marker and value sticker button
function validationCheckbox() {
    var aux = 0;

    allCheckbox.map((item) => {
        if (item.checked == false) {
            aux++;
        };
    });

    if (aux == 3 & inputCont.value == 0) {
        allCheckbox.map((item) => {
            item.classList.add("checkbox__error");
            inputCont.classList.add("input__error");
        });
    } else if (aux !== 3 & inputCont.value == 0) {
        inputCont.classList.add("input__error");
    } else if (aux == 3 & inputCont.value !== 0) {
        allCheckbox.map((item) => {
            item.classList.add("checkbox__error");
        });
    } else {
        sucess.classList.add("sucess");
    }
};

validationCont();