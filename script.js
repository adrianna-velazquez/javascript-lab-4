"use strict";

// 1. Vending Machine
let totalParagraph = document.querySelector(".total");
let buttons = document.querySelector(".button-container");
let currentTotal = 0;
buttons.addEventListener("click", (event) => {
    let amount = parseInt(event.target.getAttribute("data-amount"));
    console.log(amount);
    currentTotal += amount;
    totalParagraph.innerText = currentTotal;
});

// 2. Make Money
let coins = document.querySelector(".coin-container");
let form = document.querySelector(".make-money");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let data = new FormData(form);
    let quantity = data.get("quantity");
    let coin = data.get("coin");
    for(let i=0; i<quantity; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("coins")
        newDiv.innerText = coin;
        coins.append(newDiv);
        newDiv.addEventListener("click", () => {
            newDiv.remove();
        });
    }
    form.reset()});


// 3. Light Bulb

let bulb = document.querySelector(".bulb");
let onButton = document.querySelector(".on");
let offButton = document.querySelector(".off");
let toggleButton = document.querySelector(".toggle");
let endButton = document.querySelector(".end");

onButton.addEventListener("click", () => {
    bulb.classList.add("light");
});


offButton.addEventListener("click", () => {
    bulb.classList.remove("light");
});

toggleButton.addEventListener("click", () => {
    bulb.classList.toggle("light");
});

endButton.addEventListener("click", () => {
    bulb.remove();
    let buttons = document.querySelectorAll(".switch"); {
        // This forEach loop is going thorugh the node list and disabling that button.
        buttons.forEach((button) => { 
            button.disabled = true;
        });
    }
});