scoreEl = document.getElementById("score-el")
scoreEl.textContent = 0;

let homeScore = 0;

function freeThrow() {
    homeScore += 1;
    scoreEl.textContent = homeScore;
}

function twoPointer() {
    homeScore += 2;
    scoreEl.textContent = homeScore;
}

function threePointer() {
    homeScore += 3;
    scoreEl.textContent = homeScore;
}

guestEl = document.getElementById("guest-el")
guestEl.textContent = 0;

let guestScore = 0;

function freeThrow2() {
    guestScore += 1;
    guestEl.textContent = guestScore;
}

function twoPointer2() {
    guestScore += 2;
    guestEl.textContent = guestScore;
}

function threePointer2() {
    guestScore += 3;
    guestEl.textContent = guestScore;
}















