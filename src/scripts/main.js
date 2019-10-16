let firstArticle = document.getElementById("firstArticle")
let secondArticle = document.getElementById("secondArticle")

// Write an event listener that listens for the keyup event on the input field.
document.getElementById("message").addEventListener("keyup", function(){
    // The event handler function should update the textContent property of both sections.
    firstArticle.textContent = event.target.value;
    secondArticle.textContent = event.target.value;
})