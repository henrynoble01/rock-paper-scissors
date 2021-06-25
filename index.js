const body = document.querySelector('body')
// const userScoreCount = 00
// const houseScoreCount = 00
let userScoreCount = 00
let houseScoreCount = 00
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
let options = ['rock', 'paper', 'scissors', 'rock', 'paper', 'scissors']
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


// this is the box containing the two white boxes
let scoreDisplay = document.createElement('div');
scoreDisplay.classList.add('score-display')
headerContainer.appendChild(scoreDisplay);

// the user score in the header
let yourScore
scoreTemp(yourScore, userScoreCount, 'Yours')
// the house score in the header
let houseScore
scoreTemp(houseScore, houseScoreCount , 'House')

// scoreTemp ==> score template
function scoreTemp(item, whoscore,  message) {
     // the white box containing the score
    item = document.createElement('div')
    item.classList.add('score-box')

    scoreDisplay.appendChild(item)

    // the score text inside of the white box
    let scoreHead = document.createElement('span')
    scoreHead.innerText = message;
    scoreHead.classList.add('head-text')
    item.append(scoreHead)

    let scoreTrack = document.createElement('p')
    scoreTrack.innerText = `${whoscore}`
    scoreTrack.classList.add('score-text')
    item.appendChild(scoreTrack)
}



    let triangle = document.createElement('div')
    triangle.classList.add('triangle-container')
    centerContainer.appendChild(triangle)


// the paper image in the triangle container
let paperImg = document.createElement('img')
paperImg.src = userChoice['paper'].img
paperImg.style.border = userChoice['paper'].border
paperImg.classList.add('paper')
paperImg.classList.add('icon-style')
triangle.appendChild(paperImg)
clicked(paperImg)


// the paper image in the triangle container
let scissorsImg = document.createElement('img')
scissorsImg.src = userChoice['scissors'].img
scissorsImg.style.border = userChoice['scissors'].border
scissorsImg.classList.add('scissors')
scissorsImg.classList.add('icon-style')
triangle.appendChild(scissorsImg)
clicked(scissorsImg)


// the paper image in the triangle container
let rockImg = document.createElement('img')
rockImg.src = userChoice['rock'].img
rockImg.style.border = userChoice['rock'].border
rockImg.classList.add('rock')
rockImg.classList.add('icon-style')
triangle.appendChild(rockImg)
clicked(rockImg)


// foo bar baz
//  adding the position style to the icons
if (paperImg.parentElement == triangle){
    // console.log('this');
    paperImg.classList.add('left-paper')
}
if (scissorsImg.parentElement == triangle){
    // console.log('this');
    scissorsImg.classList.add('right-scissors')
}
if (rockImg.parentElement == triangle){
    // console.log('this');
    rockImg.classList.add('bottom-rock')
}




    const winnerBox = document.createElement('div')
    winnerBox.classList.add('show-winner-box')
    centerContainer.appendChild(winnerBox)
    // centerContainer.appendChild(winnerBox)
    winnerBox.style.display = 'none'
    // triangle.style.display = 'block'


    // the template of the result
    function resultTemplate(item, message) {
        let result = document.createElement('div')
        result.classList.add('result-temp')
        result.classList.add('show-child')


        // the white text in the result page
        let resultHeader = document.createElement('p')
        resultHeader.classList.add('result-header')
        resultHeader.innerText = message
        result.appendChild(resultHeader)

        // the icon in the result page
        let resultIcon = document.createElement('img')
        resultIcon.classList.add('result-icon')
        resultIcon.classList.add('icon-style')
        resultIcon.src = userChoice[item].img
        resultIcon.style.border = userChoice[item].border
        result.appendChild(resultIcon)
        
        // winnerBox.removeChild(result)
        // winnerBox.remove()
        winnerBox.appendChild(result)
    }

    // controls the you win and you lose text
function midresult(status) {
    let statusBox = document.createElement('div')
    statusBox.classList.add('status-box')
    statusBox.classList.add('show-child')

    let statusText = document.createElement('h3')
    statusText.classList.add('status-text')
    statusText.innerText = status
    statusBox.appendChild(statusText)

    let button = document.createElement('button')
    button.classList.add('btn-play')
    button.innerText = 'PLAY AGAIN'
    statusBox.appendChild(button)
    backClicked(button)

    if (status == 'YOU WIN'){
        statusText.style.color = 'hsl(189, 59%, 53%)'
        button.style.color = 'hsl(189, 59%, 53%)'
    }else if (status == 'YOU LOSE'){
        statusText.style.color = 'hsl(349, 70%, 56%)'
        button.style.color = 'hsl(349, 70%, 56%)'
    } else{
        statusText.style.color = '#ffffff'
        button.style.color = '#000000'

    }
     winnerBox.appendChild(statusBox)
}

// this gets the user and house input and compare it and brings out a answer 
// try and make it much beautiful in the future
let winner
function knowwin(user, house) {
    if (user == 'rock' && house == 'paper') {
        // console.log(`house wins`)
        winner = 'YOU LOSE'
        houseScoreCount++
    } 
    else if (user == 'paper' && house == 'scissors' ){
        // console.log('house wins');
        winner = 'YOU LOSE'
        houseScoreCount++
    }
    else if (user == 'scissors' && house == 'rock'){
        // console.log('house wins');
        winner = 'YOU LOSE'
        houseScoreCount++
    }
    else if (user == 'paper' && house == 'rock'){
        // console.log('user wins');
        winner = 'YOU WIN'
        userScoreCount++
    }
    else if (user == 'scissors' && house == 'paper'){
        // console.log('user wins');
        winner = 'YOU WIN'
        userScoreCount++
    }
    else if (user == 'rock' && house == 'scissors'){
        // console.log('user wins');
        winner = 'YOU WIN'
        userScoreCount++
    }
    else{
        // console.log('draw');
        winner = 'DRAW'
    }
    // console.log(winner);
    return winner
}

// this id for  the button in the show winner page
function backClicked(item) {
    item.addEventListener('click', ()=> {
        triangle.style.display = 'block'
        winnerBox.style.display = 'none'
        let remBox = document.querySelectorAll('.show-child');
        
        for (const item of remBox) {
            console.log(item);
            winnerBox.removeChild(item)
        }
    })
}

// this is for the icons in the index page
function clicked(answer) {
    answer.addEventListener('click', ()=>{
         //  the random computer generator
        randomItem()
        userClass(answer)
        
        triangle.style.display = 'none'
        winnerBox.style.display = 'flex'
        
        console.log(`user answer: ${userAnswer}`);
        console.log(`house answer: ${houseAnswer}`);
        
        knowwin(userAnswer.trim(), houseAnswer.trim())
        console.log(winner);
        addWho()

        resultTemplate( userAnswer.trim() ,'USER PICKED')
        midresult(winner)
        resultTemplate( houseAnswer.trim() ,'HOUSE PICKED')
        // debugger
        })
    }



// get the user answer classlist and turn it into a string the return it
    function userClass(item) {
        // let arr = [];
        let getUserAnswer = item.classList['value']
        // let rrr = getUserAnswer.trim().split()
        // for (let i = 0; i < getUserAnswer.length; i++) {
        //     // const element = array[i];
        //     // arr = arr.push([i])
        //     arr.push(getUserAnswer[i])
        // }
        let  step2 = getUserAnswer.match(/.*?[\.\s]+?/g)
        console.log();
        userAnswer = step2[0]
        // let rrr = getUserAnswer.toString()
        return userAnswer
    }

//  the random computer generator
    function randomItem() {
    let getHouseAnswer = Math.floor(Math.random() * options.length);
     houseAnswer = options[getHouseAnswer];
    // console.log(`house answer: ${houseAnswer}`);

    return houseAnswer
}

// show the scorw count
function addWho() {
    let getScoreBox = document.querySelectorAll('.score-text');
    // for (const item of getScoreBox) {
        // console.log(item);
        getScoreBox[0].textContent = userScoreCount 
        getScoreBox[1].textContent = houseScoreCount
    // }
    // console.log(getScoreBox);
    console.log( `House Score ${houseScoreCount }`);
    console.log( `user score ${userScoreCount }` );
}

let btnRules = document.createElement('button')
btnRules.classList.add('btn-rules')
btnRules.textContent = "Rules"
body.appendChild(btnRules)

const modal = () => {
    let modalPOP = document.createElement('div')
    modalPOP.classList.add('modal')

    modalPOP.innerHTML = `
    <div class="nav">
        <div class="left-item"> RULES </div>
        <div class="right-item"> 
            <img src="./images/icon-close.svg" alt="" />
        </div>
    </div>
    <div class="img-rules">
        <img src="./images/image-rules.svg" alt="" />
    </div>  
    `
    
    body.appendChild(modalPOP)
    // return modalPOP
}

btnRules.addEventListener('click', () => {
    modal()
    // console.log(modal);
    let hideModal = document.querySelector('.right-item')
    hideModal.addEventListener('click', () => {
        let btnx = document.querySelector('.modal')
        btnx.style.display = 'none'
        // btnx.classList.add('remove-rules')
        // debugger
    })
})