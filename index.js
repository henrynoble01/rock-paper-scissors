const body = document.querySelector('body')
const userScoreCount = 00
const houseScoreCount = 00
const userChoice = {
    rock: {
        img: './images/icon-rock.svg',
        border: '15px solid hsl(349, 71%, 52%)'
    },
    paper: {
        img: './images/icon-paper.svg',
        border: '15px solid hsl(230, 89%, 62%)'
    },
    scissors: {
        img: './images/icon-scissors.svg',
        border: '15px solid hsl(39, 89%, 49%)'
    },
}
let options = ['rock', 'paper', 'scissors', 'paper', 'rock', 'scissors']
let isBox = false;

// console.log( userScoreCount + 1 + 1 + 1 + 1 + 1 );

// adding body class to body
body.classList.add('body')

// the center container 
let centerContainer = document.createElement('div');
centerContainer.classList.add('center-items');
body.appendChild(centerContainer);

// the header on the box
let headerContainer = document.createElement('div');
headerContainer.classList.add('header-container')
centerContainer.appendChild(headerContainer);

// the img controller
let logoControl = document.createElement('div');
logoControl.classList.add('logo-controller')
headerContainer.appendChild(logoControl);

// the img logo
let gameLogo = document.createElement('img')
gameLogo.src = './images/logo.svg'
logoControl.appendChild(gameLogo)

let scoreDisplay = document.createElement('div');
scoreDisplay.classList.add('score-display')
headerContainer.appendChild(scoreDisplay);

let yourScore
scoreTemp(yourScore, userScoreCount , 'Yours')
let houseScore
scoreTemp(houseScore, houseScoreCount , 'House')

function scoreTemp(item, whoscore,  message) {
     // the white box containing the score
    item = document.createElement('div')
    item.classList.add('score-box')
    // scoreBox.style.background = '#ffffff'
    // scoreBox.style.marginLeft = 'auto'
    // scoreBox.style.borderRadius = '5px'
    // scoreBox.style.padding = '5px 25px'
    scoreDisplay.appendChild(item)

    // the score text inside of the white box
    let scoreHead = document.createElement('span')
    scoreHead.innerText = message;
    scoreHead.classList.add('head-text')
    // scoreHead.style.color = 'hsl(229, 64%, 46%)'
    item.append(scoreHead)

    let scoreTrack = document.createElement('p')
    scoreTrack.innerText = `${whoscore}`
    scoreTrack.classList.add('score-text')
    // scoreTrack.style.textAlign = 'center'
    // scoreTrack.style.fontSize = '30px'
    // scoreTrack.style.color = 'hsl(229, 25%, 31%)'
    item.appendChild(scoreTrack)
}

function iconContainer1() {
    let triangle = document.createElement('div')
    triangle.classList.add('triangle-container')
    centerContainer.appendChild(triangle)
}
iconContainer1()

function paper() {
     let paperImg = document.createElement('img')
    paperImg.src = userChoice['paper'].img
        paperImg.style.border = userChoice['paper'].border
        paperImg.classList.add('paper')
        iconStyle(paperImg);
        // function containing the item clicked
        clicked(paperImg);
        // 
        paperImg.style.top = '-25px'
        paperImg.style.left = '-25px'
        // the returen statement for the varioble
        return paperImg
}