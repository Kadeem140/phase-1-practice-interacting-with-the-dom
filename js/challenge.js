//Selectors
const counter = document.querySelector('#counter')
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const pause = document.querySelector('#pause')
const form = document.querySelector('#comment-form')
const heart = document.querySelector('#heart')
const likes = document.querySelector('.likes')

//Valuables
let intervalID;
let likesCounter = {}


//EventListeners
window.addEventListener(
    "DOMContentLoaded",
     () => intervalID = setInterval(
        function() { return counter.innerHTML++ }, 1000))

minus.addEventListener("click", () => counter.innerHTML--)
plus.addEventListener("click", () => counter.innerHTML++)
pause.addEventListener("click", () => {    clearInterval(intervalID)  })
heart.addEventListener("click", (e) => {
    const counterText = counter.innerHTML;
    likes.append(counterText);
    const newLi = document.createElement("li");
    newLi.id = counterText;
    let updatedLike = document.getElementById(counterText)
    if(likesCounter[counterText]){ 
        likesCounter[counterText] = 1;
        updatedLike.innerText = `This ${counterText} has been liked ${likesCounter[counterText]} times`;
        likes.append(newLi)
    }
    
})
form.addEventListener("submit",(e) => {
    e.preventDefault();
    const formValue = e.target[0].value
    document.body.append(formValue)
    form.reset()})

