// Define working elements
const display = document.getElementsByClassName("input_box")[0];

const plusBtn = document.getElementsByClassName("plus_btn"[0])
const minusBtn = document.getElementsByClassName("minus_btn"[0])
const resetBtn = document.getElementsByClassName("refresh_btn"[0])

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








