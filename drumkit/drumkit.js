const drumTotal = document.querySelectorAll(".container > div");
for (let index = 0; index < drumTotal.length; index++) {
    console.log(`${index} : ${drumTotal[index].innerText} : ${drumTotal[index].getAttribute("class")}`)
}

drumTotal[0].addEventListener("click", () => {
    var hiHatOpen = new Audio("./sounds/hi-hat-open.mp3");
    hiHatOpen.play();
});

drumTotal[1].addEventListener("click", () => {
    var hiHatClosed = new Audio("./sounds/hi-hat-closed.mp3");
    hiHatClosed.play();
});

drumTotal[2].addEventListener("click", () => {
    var hiHatFoot = new Audio("./sounds/hi-hat-foot.mp3");
    hiHatFoot.play();
});

drumTotal[3].addEventListener("click", () => {
    var crashCymbal = new Audio("./sounds/crash-cymbal.mp3");
    crashCymbal.play();
});

drumTotal[4].addEventListener("click", () => {
    var snareDrum = new Audio("./sounds/snare-drum.mp3");
    snareDrum.play();
});

drumTotal[5].addEventListener("click", () => {
    var snareDrumCs = new Audio("./sounds/snare-drum-cs.mp3");
    snareDrumCs.play();
});

drumTotal[6].addEventListener("click", () => {
    var highTom = new Audio("./sounds/high-tom.mp3");
    highTom.play();
});

drumTotal[7].addEventListener("click", () => {
    var lowTom = new Audio("./sounds/low-tom.mp3");
    lowTom.play();
});

drumTotal[8].addEventListener("click", () => {
    var bassDrum = new Audio("./sounds/bass-drum.mp3");
    bassDrum.play();
});

drumTotal[9].addEventListener("click", () => {
    var floorTom = new Audio("./sounds/floor-tom.mp3");
    floorTom.play();
});

drumTotal[10].addEventListener("click", () => {
    var rideCymbal = new Audio("./sounds/ride-cymbal.mp3");
    rideCymbal.play();
});