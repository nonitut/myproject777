document.addEventListener("DOMContentLoaded", function () {
// появление текста на 1 экране
window.addEventListener("load", function () {
    const firstBlockLeft = document.querySelector(".firstblockleft");
    const firstBlockRight = document.querySelector(".firstblockright");
    setTimeout(() => {
    firstBlockLeft.classList.add("fade-in");
    }, 500);
    setTimeout(() => {
    firstBlockRight.classList.add("fade-in");
    }, 1500);
});

// изменение цвета у кнопки
document.getElementById("flavorSelect").addEventListener("change", function () {
    let select = this;
    let selectedOption = select.options[select.selectedIndex];
    select.style.backgroundColor = window.getComputedStyle(selectedOption).backgroundColor;
    select.style.color = "#ffffff";
});

const startSurveyButton = document.getElementById("startSurvey");
const modal = document.getElementById("pop");
const closePopup = document.getElementById("closePopup");

// включение модального окна на 2 экране
startSurveyButton.addEventListener("click", () => {
    modal.style.display = "block";
});

// закрытие по клику попапа на 2 экране
closePopup.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
    modal.style.display = "none";
    }
});

const nextSteps = document.querySelectorAll(".nextStep");
const steps = document.querySelectorAll(".popupwithtest > div");

nextSteps.forEach((button, index) => {
    button.addEventListener("click", () => {
    steps[index].classList.remove("active");
    if (index + 1 < steps.length) {
        steps[index + 1].classList.add("active");
    } else {
        modal.style.display = "none";
    }
    });
});

const alertOnHover = document.querySelector(".alertonhover");
const etapWtoroyPopup = document.querySelector(".etapwtoroypopup");

alertOnHover.addEventListener("mouseenter", function () {
    etapWtoroyPopup.style.display = "block";
    etapWtoroyPopup.style.opacity = "0";
    setTimeout(function () {
    etapWtoroyPopup.style.opacity = "1";
    }, 0);
});

alertOnHover.addEventListener("mouseleave", function () {
    setTimeout(function () {
    etapWtoroyPopup.style.opacity = "0";
    setTimeout(function () {
        etapWtoroyPopup.style.display = "none";
    }, 1000);
    }, 1000);
});

////////////////////////////////////////////////////////////////
let orderButton = document.querySelector(".oformitzakaz");
let popup = document.getElementById("secondPopupFooter");
let closePop = document.getElementById("closePop");
let submitButton = document.getElementById('submitPhone');
let confirmationMessage = document.getElementById('confirmationMessage');

// Show the pop-up
orderButton.addEventListener("click", function () {
    popup.style.display = "block";
});

// Close the pop-up and reset the confirmation message
closePop.addEventListener("click", function () {
    popup.style.display = "none";
    confirmationMessage.style.display = 'none'; // Сбрасываем сообщение при закрытии
});

// Close the pop-up when clicking outside of it and reset the confirmation message
window.addEventListener("click", function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
        confirmationMessage.style.display = 'none'; // Сбрасываем сообщение при закрытии
    }
});

// Show confirmation message on form submission
submitButton.addEventListener('click', function() {
    confirmationMessage.style.display = 'block';
});




});
