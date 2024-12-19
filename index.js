let homeScore = 0
let guestScore = 0

let hText = document.getElementById("h-result")
let gText = document.getElementById("g-result")

function addOneH() {
    homeScore += 1
    hText.textContent = homeScore
}

function addTwoH() {
    homeScore += 2
    hText.textContent = homeScore
}

function addThreeH() {
    homeScore += 3
    hText.textContent = homeScore
}

function addOneG() {
    guestScore += 1
    gText.textContent = guestScore
}

function addTwoG() {
    guestScore += 2
    gText.textContent = guestScore
}

function addThreeG() {
    guestScore += 3
    gText.textContent = guestScore
}

function newGame() {
    guestScore = 0
    homeScore = 0
    hText.textContent = homeScore
    gText.textContent = guestScore
}