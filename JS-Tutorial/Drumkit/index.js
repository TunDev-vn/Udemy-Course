const drumTotal = document.querySelectorAll(".drum");

/*
It is not recommended to declare external sounds like this because the audio must wait for the whole thing to be played before it can continue playing
const sound1 = new Audio("./sounds/crash.mp3")
const sound2 = new Audio("./sounds/kick-bass.mp3")
const sound3 = new Audio("./sounds/snare.mp3")
const sound4 = new Audio("./sounds/tom-1.mp3")
const sound5 = new Audio("./sounds/tom-2.mp3")
const sound6 = new Audio("./sounds/tom-3.mp3")
const sound7 = new Audio("./sounds/tom-4.mp3")
*/

for (var i = 0; i < drumTotal.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        const soundElement = this.innerHTML;
        switch (soundElement) {
            case "w": 
                const tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a": 
                const tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s": 
                const tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d": 
                const tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;            
            case "j": 
                const snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;            
            case "k": 
                const crash = new Audio("./sounds/crash.mp3");
                crash.play();
                break;            
            case "l": 
                const kickBass = new Audio("./sounds/kick-bass.mp3");
                kickBass.play();
                break;
        }
    });
}