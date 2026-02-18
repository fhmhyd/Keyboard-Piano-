let keyArea = document.querySelector(".key-area");
let white1 = document.getElementById("white1");
let white2 = document.getElementById("white2");
let white3 = document.getElementById("white3");
let white4 = document.getElementById("white4");
let white5 = document.getElementById("white5");
let white6 = document.getElementById("white6");
let white7 = document.getElementById("white7");
let white8 = document.getElementById("white8");

let sounds = [
    {
        id: "white1",
        src: "./sounds/28.mp3"
    },
    {
        id: "white2",
        src: "./sounds/29.mp3"
    },
    {
        id: "white3",
        src: "./sounds/36.mp3"
    },
    {
        id: "white4",
        src: "./sounds/41.mp3"
    },
    {
        id: "white5",
        src: "./sounds/48.mp3"
    },
    {
        id: "white6",
        src: "./sounds/53.mp3"
    },
    {
        id: "white7",
        src: "./sounds/60.mp3"
    },
    {
        id: "white8",
        src: "./sounds/64.mp3"
    },
    {
        id: "black1",
        src: "./sounds/Steinway84.mp3"
    },
    {
        id: "black2",
        src: "./sounds/Steinway89.mp3"
    },
    {
        id: "black3",
        src: "./sounds/Steinway94.mp3"
    },
    {
        id: "black4",
        src: "./sounds/Steinway99.mp3"
    }
]

//White keys Down. 
document.body.addEventListener("keydown", (event) => {
    if (event.key === "a" || event.key === "A") {
        white1.style.transition = "all 0.1s ease";
        white1.style.transform = "scale(0.98)";
        white1.style.backgroundColor = "rgb(190, 190, 190)";
        let sound = new Audio(sounds[0].src);
        sound.play();
        sound.currentTime = 0;

    }

})
document.body.addEventListener("keydown", (event) => {
    if (event.key === "s" || event.key === "S") {
        white2.style.transition = "all 0.1s ease";
        white2.style.transform = "scale(0.98)";
        white2.style.backgroundColor = "rgb(190, 190, 190)";
        let sound = new Audio(sounds[2].src);
        sound.play();
        sound.currentTime = 0;
    }

})
document.body.addEventListener("keydown", (event) => {
    if (event.key === "d" || event.key === "D") {
        white3.style.transition = "all 0.1s ease";
        white3.style.transform = "scale(0.98)";
        white3.style.backgroundColor = "rgb(190, 190, 190)";
        let sound = new Audio(sounds[3].src);
        sound.play();
        sound.currentTime = 0;

    }

})
document.body.addEventListener("keydown", (event) => {
    if (event.key === "f" || event.key === "F") {
        white4.style.transition = "all 0.1s ease";
        white4.style.transform = "scale(0.98)";
        white4.style.backgroundColor = "rgb(190, 190, 190)";
        let sound = new Audio(sounds[4].src);
        sound.play();
        sound.currentTime = 0;

    }

})
document.body.addEventListener("keydown", (event) => {
    if (event.key === "g" || event.key === "G") {
        white5.style.transition = "all 0.1s ease";
        white5.style.transform = "scale(0.98)";
        white5.style.backgroundColor = "rgb(190, 190, 190)";
        let sound = new Audio(sounds[5].src);
        sound.play();
        sound.currentTime = 0;

    }

})
document.body.addEventListener("keydown", (event) => {
    if (event.key === "h" || event.key === "H") {
        white6.style.transition = "all 0.1s ease";
        white6.style.transform = "scale(0.98)";
        white6.style.backgroundColor = "rgb(190, 190, 190)";
        let sound = new Audio(sounds[6].src);
        sound.play();
        sound.currentTime = 0;

    }

})
document.body.addEventListener("keydown", (event) => {
    if (event.key === "j" || event.key === "J") {
        white7.style.transition = "all 0.1s ease";
        white7.style.transform = "scale(0.98)";
        white7.style.backgroundColor = "rgb(190, 190, 190)";
        let sound = new Audio(sounds[7].src);
        sound.play();
        sound.currentTime = 0;

    }

})
document.body.addEventListener("keydown", (event) => {
    if (event.key === "k" || event.key === "K") {
        white8.style.transition = "all 0.1s ease";
        white8.style.transform = "scale(0.98)";
        white8.style.backgroundColor = "rgb(190, 190, 190)";
        let sound = new Audio("./sounds/Steinway79.mp3");
        sound.play();
        sound.currentTime = 0;

    }

})
//Black keys Down

document.body.addEventListener("keydown", (event) => {
    if (event.key === "w" || event.key === "W") {
        black1.style.transition = "all 0.1s ease";
        black1.style.transform = "scale(0.98)";
        black1.style.backgroundColor = "rgba(34, 34, 34, 1)";
        let sound = new Audio(sounds[9].src);
        sound.play();
        sound.currentTime = 0;

    }

})
document.body.addEventListener("keydown", (event) => {
    if (event.key === "r" || event.key === "R") {
        black2.style.transition = "all 0.1s ease";
        black2.style.transform = "scale(0.98)";
        black2.style.backgroundColor = "rgba(34, 34, 34, 1)";
        let sound = new Audio(sounds[10].src);
        sound.play();
        sound.currentTime = 0;

    }

})
document.body.addEventListener("keydown", (event) => {
    if (event.key === "y" || event.key === "Y") {
        black3.style.transition = "all 0.1s ease";
        black3.style.transform = "scale(0.98)";
        black3.style.backgroundColor = "rgba(34, 34, 34, 1)";
        let sound = new Audio(sounds[11].src);
        sound.play();
        sound.currentTime = 0;

    }

})
document.body.addEventListener("keydown", (event) => {
    if (event.key === "i" || event.key === "I") {
        black4.style.transition = "all 0.1s ease";
        black4.style.transform = "scale(0.98)";
        black4.style.backgroundColor = "rgba(34, 34, 34, 1)";
        let sound = new Audio("./sounds/Steinway99.mp3");
        sound.play();
        sound.currentTime = 0;

    }

})

//white keys Up

document.body.addEventListener("keyup", (event) => {
    if (event.key === "a" || event.key === "A") {
        white1.style.transform = "scale(1)";
        white1.style.backgroundColor = "rgb(255, 255, 255)";

    }
})
document.body.addEventListener("keyup", (event) => {
    if (event.key === "s" || event.key === "S") {
        white2.style.transform = "scale(1)";
        white2.style.backgroundColor = "rgb(255, 255, 255)";

    }
})
document.body.addEventListener("keyup", (event) => {
    if (event.key === "d" || event.key === "D") {
        white3.style.transform = "scale(1)";
        white3.style.backgroundColor = "rgb(255, 255, 255)";

    }
})
document.body.addEventListener("keyup", (event) => {
    if (event.key === "f" || event.key === "F") {
        white4.style.transform = "scale(1)";
        white4.style.backgroundColor = "rgb(255, 255, 255)";

    }
})

document.body.addEventListener("keyup", (event) => {
    if (event.key === "g" || event.key === "G") {
        white5.style.transform = "scale(1)";
        white5.style.backgroundColor = "rgb(255, 255, 255)";

    }
})

document.body.addEventListener("keyup", (event) => {
    if (event.key === "h" || event.key === "H") {
        white6.style.transform = "scale(1)";
        white6.style.backgroundColor = "rgb(255, 255, 255)";

    }
})
document.body.addEventListener("keyup", (event) => {
    if (event.key === "j" || event.key === "J") {
        white7.style.transform = "scale(1)";
        white7.style.backgroundColor = "rgb(255, 255, 255)";

    }
})
document.body.addEventListener("keyup", (event) => {
    if (event.key === "k" || event.key === "K") {
        white8.style.transform = "scale(1)";
        white8.style.backgroundColor = "rgb(255, 255, 255)";

    }
})


//black keys Up

document.body.addEventListener("keyup", (event) => {
    if (event.key === "w" || event.key === "W") {
        black1.style.transform = "scale(1)";
        black1.style.backgroundColor = "black";

    }
})
document.body.addEventListener("keyup", (event) => {
    if (event.key === "r" || event.key === "R") {
        black2.style.transform = "scale(1)";
        black2.style.backgroundColor = "black";

    }
})
document.body.addEventListener("keyup", (event) => {
    if (event.key === "y" || event.key === "Y") {
        black3.style.transform = "scale(1)";
        black3.style.backgroundColor = "black";

    }
})
document.body.addEventListener("keyup", (event) => {
    if (event.key === "i" || event.key === "I") {
        black4.style.transform = "scale(1)";
        black4.style.backgroundColor = "black";

    }
})
