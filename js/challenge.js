//Selectors
const counter = document.querySelector('#counter')
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const pause = document.querySelector('#pause')

let intervalID;


//EventListeners
window.addEventListener(
    "DOMContentLoaded",
     () => intervalID = setInterval(
        function() { return counter.innerHTML++ }, 1000))

minus.addEventListener("click", () => counter.innerHTML--)
plus.addEventListener("click", () => counter.innerHTML++)
pause.addEventListener("click", () => {    clearInterval(intervalID)  })

function pauseFunc(){
    pause.innerHTML = "resume",
     clearInterval(intervalID)
}