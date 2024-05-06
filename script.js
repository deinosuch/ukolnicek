// Ke každému úkolu přidáme tři tlačítka
// - splnit => nastaví class "splneny"
// - resetovat => nastaví class "nesplneny"
// - rozpracovat => nastaví class "rozpracovany"

let ukoly = document.querySelectorAll('main li')

for (const ukol of ukoly) {
    ukol.className = "nesplneny"

    let splneno = document.createElement("button")
    splneno.innerHTML = "splnit"
    ukol.appendChild(splneno)

    let resetovat = document.createElement("button")
    resetovat.innerHTML = "resetovat"
    ukol.appendChild(resetovat)

    let rozpracovat = document.createElement("button")
    rozpracovat.innerHTML = "rozpracovat"
    ukol.appendChild(rozpracovat)

    splneno.addEventListener("click", () => {
        ukol.className = "splneny"
    })

    resetovat.addEventListener("click", () => {
        ukol.className = "nesplneny"
    })

    rozpracovat.addEventListener("click", () => {
        ukol.className = "rozpracovany"
    })
}

function filtrovat_ukoly(filtrovany) {
    for (const ukol of ukoly) {
        if(ukol.className == filtrovany) {
            ukol.style.display = ""
        } else {
            ukol.style.display = "none"
        }
    }
}

document.getElementById("filtr_splneno").addEventListener("click", () => {
    filtrovat_ukoly("splneny")
})

document.getElementById("filtr_nesplneno").addEventListener("click", () => {
    filtrovat_ukoly("nesplneny")
})

document.getElementById("filtr_rozpracovano").addEventListener("click", () => {
    filtrovat_ukoly("rozpracovany")
})

document.getElementById("filtr_vsechny").addEventListener("click", () => {
    for (const ukol of ukoly) {
        ukol.style.display = ""
    }
})
