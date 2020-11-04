console.log('hello')




let currentQuestion = 0
let pageSections = document.querySelectorAll('section.q')
let nextButtons = document.querySelectorAll('button.next')

    


pageSections[currentQuestion].classList.add('active')

nextButtons.forEach(function(button){
    button.addEventListener('click', function(event) {
        event.preventDefault()
        console.log('you just pressed a next button')


        //remove active from whatever its on
        pageSections[currentQuestion].classList.remove('active')
        // add active to next question
        currentQuestion++
        pageSections[currentQuestion].classList.add('active')
    })
    

});






// when the .final-calculation button gets clicked
let lastNext = document.querySelector('button.final-calculation')
lastNext.addEventListener('click', function(button){

    console.log('last btn')

    let selectedCollection = document.querySelectorAll(':checked')
    console.log(selectedCollection)
    
    let birdTotal = 0
    let catTotal = 0
    let meanSkunkTotal = 0
    let scaryWormTotal = 0
    
    // let answerValues = selectedCollection.value
    for ( let i = 0; i < selectedCollection.length; i++){
        console.log('heres an answer', selectedCollection[i].value)
        if (selectedCollection[i].value == "Ravenclaw"){
            birdTotal++
        }
        if (selectedCollection[i].value == "Hufflepuff"){
            meanSkunkTotal++
        }
        if (selectedCollection[i].value == "Slytherin"){
            scaryWormTotal++
        }
        if (selectedCollection[i].value == "Griffindor"){
            catTotal++
        }
    }
    console.log(birdTotal, catTotal, meanSkunkTotal, scaryWormTotal)



    // logic for figuring out the winner
    let winnerChickenDinner = birdTotal;
    let winnerColor = 'blue'

    if ( catTotal > winnerChickenDinner ){
        console.log('NOPE, gryf')
        winnerChickenDinner = catTotal
        winnerColor = 'red'
    } 

    if ( meanSkunkTotal > winnerChickenDinner ){
        console.log('NOPE, hufflepuff')
        winnerChickenDinner = meanSkunkTotal
        winnerColor = 'yellow'
    } 

    if ( scaryWormTotal > winnerChickenDinner ){
        console.log('NOPE, slytherin')
        winnerChickenDinner = scaryWormTotal
        winnerColor = 'green'
    } 

    document.getElementById(winnerColor).classList.add('selected')

})

