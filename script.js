console.log('hello')

let titleDiv=document.getElementById('title')
console.log('before: ',titleDiv.innerText)

let message= 'Goodbye my lover!'
titleDiv.innerText='Goodbye my lover!'
console.log('after: ',titleDiv.innerText)

titleDiv.innerHTML =`<p>${message}</p>`

titleDiv.style.color ='red'

let redDiv= document.getElementById('red')
let yellowDiv= document.getElementById('yellow')
let greenDiv= document.getElementById('green')

/*redDiv.onclick = () => {
  console.log('red')
  //getComputerChoice => 'paper'
  //UserChoice vs. computerChoice => result
  // -1,0,1
  //show everything on the screen (DOM)
}

yellowDiv.onclick =() => console.log ('yellow')
greenDiv.onclick =() => console.log('green')*/

  const squares = document.querySelectorAll('.colorSquare')
  //console.log(squares)

//console.log(squares[0].value)
//console.log(squares[1].value)
//console.log(squares[2].value)

//for each
const timesClicked = { 'red' :0, 'yellow': 0, 'green':0}
squares.forEach(square => {
  square.onclick =() =>{ 
    timesClicked[square.value] +=1
    square.innerText =timesClicked[square.value]
    //console.log(square.value)
  }
})


function clearScore() {
timesClicked.red=0
timesClicked.yellow=0
timesClicked.green=0
squares.forEach(square=> {
square.innerText= ''
})
}

const clearGameBtn= document.getElementById('clear-game')
clearGameBtn.onclick =() => clearScore()