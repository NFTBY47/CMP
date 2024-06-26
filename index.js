let gem = document.querySelector('.gem-cost')
let clickerCost = document.querySelector('.pp')
let parseGem = parseFloat(gem.innerHTML)
let parsedClickerCost = parseFloat(clickerCost.innerHTML)

function incrementGem() {
    parseGem += 1
    gem.innerHTML = parseGem
    
}

function buyClicker() {
    if (parseGem >= parsedClickerCost) {
        parseGem -= parsedClickerCost
        gem.innerHTML = parseGem 
    }
}
