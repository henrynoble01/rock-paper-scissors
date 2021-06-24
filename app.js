const body = document.querySelector('body')
const userScore = 00
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
let options = ['rock', 'paper', 'scissors', 'paper','rock', 'scissors']
let isBox = false;

// add style to the body
function bodyStyle() {
    
    body.style.background = 'hsl(214, 47%, 23%)'
    body.style.height = '100vh'
    body.style.display = 'flex'
    body.style.justifyContent = 'center'
    body.style.alignItems = 'center'
}
bodyStyle()


// creating the center container
let content = document.createElement('div')
content.style.width = '500px'
content.style.height= '500px'
body.appendChild(content)


// this is the place that the header is housed
const headerContainer = function(){
    // the container of the score and gameName
    let header = document.createElement('div')
    header.style.border = '2px solid hsl(217, 16%, 45%)'
    header.style.borderRadius ='10px'
    header.style.padding = '10px 15px'
    header.style.display = 'flex'
    // text.innerText = 'my life'
    content.appendChild(header)

    // the container of the game
    let gameName = document.createElement('div')
    header.appendChild(gameName)
    
    // the text in the header for the rock,paper, scissors
    let gameNameLogo = document.createElement('img')
    gameNameLogo.src = './images/logo.svg'
    gameNameLogo.style.width = '80%'
    gameName.appendChild(gameNameLogo)
    
    
    // the white box containing the score
    let scoreBox = document.createElement('div')
    scoreBox.style.background = '#ffffff'
    scoreBox.style.marginLeft = 'auto'
    scoreBox.style.borderRadius ='5px'
    scoreBox.style.padding ='5px 25px'
    header.appendChild(scoreBox)
    
    // the score text inside of the white box
    let scoreHead = document.createElement('span')
    scoreHead.innerText = 'Score'
    scoreHead.style.color = 'hsl(229, 64%, 46%)'
    scoreBox.append(scoreHead)
    
    let scoreTrack = document.createElement('p')
    scoreTrack.innerText = `${userScore}`
    scoreTrack.style.textAlign = 'center'
    scoreTrack.style.fontSize = '30px'
    scoreTrack.style.color = 'hsl(229, 25%, 31%)'
    scoreBox.appendChild(scoreTrack)
}

headerContainer()

// let whatever = ''
let houseAnswer
let userAnswer



let clicked = function(answer){
     answer.addEventListener('click', function() {
         //  the random computer generator
         let getHouseAnswer = Math.floor(Math.random() * options.length);
          houseAnswer = options[getHouseAnswer];
         console.log(`house answer: ${houseAnswer}`);
         //  hetting the icon the user clicked
         let getUserAnswer = answer.classList['value']
         userAnswer = getUserAnswer
        console.log(`user answer: ${userAnswer}`);
        //  whoWon(userAnswer, houseAnswer)
        // isBox = true
        // console.log( isBox );
       
     })
 }
// function containing the triangle
const iconContainer = function(){
    // isBox = false;

    const triangleContainer = function(){
        // the triangle container
        let triangle = document.createElement('div')
        triangle.style.backgroundImage = 'url("./images/bg-triangle.svg")'
        triangle.style.height = '275px'
        triangle.style.width = '304px'
        triangle.style.backgroundRepeat = 'no-repeat'
        triangle.style.position = 'relative'
        triangle.style.top = '50%'
        triangle.style.left = '50%'
        triangle.style.transform = 'translate(-50%, -50%)'

        
        content.appendChild(triangle)

        // paper function from rock papaer scissors 
        let paper = function paper() {
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

    // scissors  function  from rock papaer scissors
    let scissors = function scissors(){
        let scissorsImg = document.createElement('img')
        scissorsImg.src = userChoice['scissors'].img
        scissorsImg.style.border = userChoice['scissors'].border
        scissorsImg.classList.add('scissors')
        iconStyle(scissorsImg);
        // function containing the item clicked
        clicked(scissorsImg);
        // 
        scissorsImg.style.top = '-25px'
        scissorsImg.style.right = '-25px'
        // the returen statement for the varioble
        return scissorsImg;
    }

    // rock from rock papaer scissors
    let rock = function(){
        let rockImg = document.createElement('img')
        rockImg.src = userChoice['rock'].img
        rockImg.style.border = userChoice['rock'].border
        rockImg.classList.add('rock')
        iconStyle(rockImg);
        // function containing the item clicked
        clicked(rockImg);
        // 
        rockImg.style.bottom = '-25px'
        rockImg.style.left = '30%'
        // the returen statement for the varioble
        return rockImg;
    }
    
    
    function appendWhat(parent) {
        //where is appended the function to the triangle element
        parent.appendChild(rock());
        parent.appendChild(paper());
        parent.appendChild(scissors());
    }
    appendWhat(triangle)
    
}
triangleContainer()



// general icon iconStyle
function iconStyle(item) {
    item.style.background = '#eeeeee'
    item.style.padding = '20px'
    item.style.borderRadius = '50%'
    item.style.position = 'absolute'
    item.style.cursor = 'pointer'
    // item.style.transform = 'scale(1.5)'
}


function whoWon( user , houseChoice ) {
    let box = document.createElement('div')
    // triangle.style.backgroundImage = 'url("./images/bg-triangle.svg")'
    box.style.height = '235px'
    box.style.width = '450px'
    box.style.display = 'flex'
    box.style.position = 'relative'
    box.style.top = '35%'
    box.style.left = '50%'
    box.style.transform = 'translate(-50%, -50%)'
    // appending the box to content element
    content.appendChild(box)

    // function rendering your choice
    function youPicked() {
        let youPicked = document.createElement('div')
        youPicked.style.width = '50%'
        youPicked.style.position = 'relative'
        youPicked.style.display = 'flex'
        youPicked.style.justifyContent = 'center'
        // youPicked.style.flexDirection = 'column'
        
        // the white text
        let userText = document.createElement('p')
        userText.innerText = 'YOU PICKED' 
        userText.style.textAlign = 'center'
        userText.style.fontSize = '20px'
        userText.style.color = '#ffffff'

        // the icon
        let pickedIcon = document.createElement('img')
        pickedIcon.src = userChoice[user].img,
        pickedIcon.style.border = userChoice[user].border
        pickedIcon.style.bottom = '0' 
        pickedIcon.style.transform = 'scale(1.5)'
        iconStyle(pickedIcon)


        box.appendChild(youPicked)
        youPicked.appendChild(userText)
        youPicked.appendChild(pickedIcon)
        return youPicked
    }
    youPicked()


    // function rendering computer picked
    function housePicked() {
        let housePicked = document.createElement('div')
        housePicked.style.width = '50%'
        housePicked.style.float = 'right'
        housePicked.style.position = 'relative'
        housePicked.style.display = 'flex'
        housePicked.style.justifyContent = 'center'
        // housePicked.style.alignItems = 'center'

        // computerPicked.style.background = 'blue'
        // youPicked.style.flexDirection = 'column'
        
        // the white text
        let userText = document.createElement('p')
        userText.innerText = 'THE HOUSE PICKED'
        userText.style.textAlign = 'center'
        userText.style.fontSize = '20px'
        userText.style.color = '#ffffff'

        // the icon
        let pickedIcon = document.createElement('img')
        pickedIcon.src = userChoice[houseChoice].img,
        pickedIcon.style.border = userChoice[houseChoice].border
        pickedIcon.style.bottom = '0'
        pickedIcon.style.transform = 'scale(1.5)'
        pickedIcon.style.margin = '0  auto'
        iconStyle(pickedIcon)


        box.appendChild(housePicked)
        housePicked.appendChild(userText)
        housePicked.appendChild(pickedIcon)
        return housePicked
    }
    housePicked()

}


        // if (isBox == false) {
        //     triangleContainer()
        // }else{
        //     whoWon(userAnswer, houseAnswer)
        // }
        // whoWon(userAnswer, houseAnswer)

}

iconContainer()
// if 

// console.log( triangleContainer() );