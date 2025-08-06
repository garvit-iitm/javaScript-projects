const startbutton = document.getElementById("startButton");
const stopbutton = document.getElementById("stopButton");

startbutton.addEventListener("click", startColorChange);
stopbutton.addEventListener("click", stopColorChange);

const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;



function startColorChange() {
    if (!intervalId) {
        intervalId = setInterval(setBgColor, 1000);
    }

    function setBgColor() {
    document.getElementById("bgColor").style.backgroundColor = randomColor();
}
}

function stopColorChange() {
    clearInterval(intervalId);
    intervalId = null;
}