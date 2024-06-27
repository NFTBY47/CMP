let gem = document.querySelector('.gem-cost')
let parseGEM = parseFloat(gem.innerHTML)

let clickerCost = document.querySelector('.clicker-cost')
let parsedClickerCost = parseFloat(clickerCost.innerHTML)

function incrementGem() {
    parseGEM += 1
    gem.innerHTML = parseGEM
    
}

function buyClicker() {
    if (parseGEM >= parsedClickerCost) {
        parseGEM -= parsedClickerCost
        gem.innerHTML = parseGEM
    }
}
