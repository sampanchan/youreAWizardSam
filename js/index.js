console.log('hello')



// have only one question on screen
// have radio-buttons select and deselect answer
// have next button go to next question

// last question/section be what you are (wizard)


let currentQuestion = 0
let pageSections = document.querySelectorAll('section.q')
let nextButtons = document.querySelectorAll('button.next')

    

// for (let i = 0; i < pageSections.length; i++){
//     pageSections[i].classList.add('active')
// }

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
    // have question answered before going onto the next question -- ALERT


    // window.onload = function(){
    //     //alert if radio button not pressed
    //     document.getElementById('v').onsubmit=function(){
    //         if (!document.getElementById('v').checked){
    //             alert("Pick a choice ya dumb wizard!"):
    //             return false;
    //         }
    //     }
    // }

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


    //calculated winner show on house section
    // let houseSection = document.querySelectorAll('house')
    // pageSections[currentQuestion].classList.remove('active')
    // houseSection.classList.add('active')

    






// look at answers and figure out what house??????????
// let wizardAnswers = document.getElementById('value').value

/*
    // have value of question collected
    

    // have value of question be caluted


    // calculate answer
    let houseSum = 0
    for (let i = 0; i < pageSections.values.length; i++){
        houseSum += parseInt(pageSections[i],4)
    }

    let houseAvg= houseSum/pageSections.values.length;
    console.log("your house is: " + houseAvg)
    //show final 'section' as result based on value
    */
})


// let alertPopup = function(){
// 	return (''!== nextButtons.value.trim()|| (alert('YOU FORGOT SOMETHING'), !1))
// }



// show the house that matches the user