let botscore = 0;
let userscore = 0;

let choice = document.querySelectorAll(".choice");
let compair = document.querySelector("h2");
let userpoint = document.querySelector("#user");
let botpoint = document.querySelector("#bot");

const playgame = (userchoice) => {
    const compchoice = getcompchoice();

    if (userchoice === compchoice) {
        gameDraw();
    } else if (
        (userchoice === "rock" && compchoice === "paper") ||
        (userchoice === "paper" && compchoice === "scissor") ||
        (userchoice === "scissor" && compchoice === "rock")
    ) {
        botscore++;
        compwin();
        botpoint.innerText = botscore;
    } else {
        userscore++;
        userwin();
        userpoint.innerText = userscore;
    }
};

const getcompchoice = () => {
    const arr = ["rock", "paper", "scissor"];
    let randomidx = Math.floor(Math.random() * 3);
    return arr[randomidx];
};

choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

function gameDraw() {
    compair.innerText = "It's a Draw. Try again!";
    compair.style.backgroundColor = "gray";
    compair.style.Color = "black";
}

function compwin() {
    compair.innerText = "You lost. Try again.";
    compair.style.backgroundColor = "red";
}

function userwin() {
    compair.innerText = "You win!";
    compair.style.backgroundColor = "green";
}
