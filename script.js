// Define working elements
const display = document.querySelector(".input_box");

const plusBtn = document.querySelector(".plus_btn")
const minusBtn = document.querySelector(".minus_btn")
const resetBtn = document.querySelector(".refresh_btn")

//Define zero state
let count = 0;

// Dispaly update 
function displayUpdate() {
    display.value = count;
}

//Count function
function updateCounter(action) {
    if (action === "plus") {
        count++; 
    } else if (action === "minus") {
        count--; 
    } else if (action === "reset") {
        count = 0; 
    }
    
}

//Assign functions to button and display
plusBtn.addEventListener("click" , function() {
updateCounter("plus") 
displayUpdate()
});

minusBtn.addEventListener("click" , function() {
updateCounter("minus")
displayUpdate()
});

resetBtn.addEventListener("click" , function() {
updateCounter("reset")
displayUpdate()
});








