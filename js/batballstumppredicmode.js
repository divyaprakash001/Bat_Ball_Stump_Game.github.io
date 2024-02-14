function winnerSound(music) {
    audio = new Audio(music);
    audio.play();
}





function cricketMatch(r) {
    let userChoiceMsg = '';
    let randomNumber;
    let UserrandomNumber;
    let computerChoice;
    let audio, music;
    let result;
    let predic;

    predic = document.querySelector('#predic');

    if (predic === 'predict') {
        // reverse()
        if (r == 1) {
            userChoiceMsg = 'Bat';
            document.querySelector('#user').src = 'images/cricbat.png';
            // userPredic()
            randomNumber = Math.floor(Math.random() * 3);
            if (randomNumber > 0 && randomNumber <= 1) {
                computerChoice = 'Bat';
                document.querySelector('#computer').src = 'images/cricbat.png';
            } else if (randomNumber > 1 && randomNumber <= 2) {
                computerChoice = 'Ball';
                document.querySelector('#computer').src = 'images/cricball.png';
            } else {
                computerChoice = 'Stump';
                document.querySelector('#computer').src = 'images/cricstump.png';
            }



            if (computerChoice === 'Ball') {
                resultMsg = 'user won';
                document.querySelector('#userwinner').style.display = "block";
                document.querySelector('#computerwinner').style.display = "none";
                document.querySelector('#result').innerHTML = `${resultMsg}`;
                music = 'sound/batsound.mp3';
            } else if (computerChoice === 'Stump') {
                resultMsg = 'computer won';
                document.querySelector('#userwinner').style.display = "none";
                document.querySelector('#userwinner').style.display = "none";
                document.querySelector('#computerwinner').style.display = "block";
                document.querySelector('#result').innerHTML = `${resultMsg}`;
                music = 'sound/gunsount.mp3';
            } else {
                document.querySelector('#computerwinner').style.display = "none";
                document.querySelector('#userwinner').style.display = "none";
                resultMsg = '<h1>match tied</h1>'
                document.querySelector('#result').innerHTML = `${resultMsg}`;
                music = 'sound/Slap.mp3';
            }



            winnerSound(music);
            document.querySelector('#computer').innerHTML = `Computer have choosen ${computerChoice}`;



        } else if (r == 2) {
            userChoiceMsg = 'Ball';
            document.querySelector('#user').src = 'images/cricball.png';
            randomNumber = Math.floor(Math.random() * 3);
            computerChoice;
            if (randomNumber > 0 && randomNumber <= 1) {
                computerChoice = 'Bat';
                document.querySelector('#computer').src = 'images/cricbat.png';
            } else if (randomNumber > 1 && randomNumber <= 2) {
                computerChoice = 'Ball';
                document.querySelector('#computer').src = 'images/cricball.png';
            } else {
                computerChoice = 'Stump';
                document.querySelector('#computer').src = 'images/cricstump.png';
            }


            let result;
            if (computerChoice === 'Bat') {
                resultMsg = 'computer won';
                document.querySelector('#userwinner').style.display = "none";
                document.querySelector('#computerwinner').style.display = "block";
                document.querySelector('#result').innerHTML = `${resultMsg}`;
                music = 'sound/batsound.mp3';
            } else if (computerChoice === 'Stump') {
                resultMsg = 'user won';
                document.querySelector('#userwinner').style.display = "block";
                document.querySelector('#computerwinner').style.display = "none";
                document.querySelector('#result').innerHTML = `${resultMsg}`;
                music = 'sound/gunsount.mp3';
            } else {
                resultMsg = 'match tied';
                document.querySelector('#computerwinner').style.display = "none";
                document.querySelector('#userwinner').style.display = "none";
                document.querySelector('#result').innerHTML = `${resultMsg}`;
                music = 'sound/Slap.mp3';
            }


            winnerSound(music)
            document.querySelector('#computer').innerHTML = `Computer have choosen ${computerChoice}`;



        } else {
            userChoiceMsg = 'Stump';
            document.querySelector('#user').src = 'images/cricstump.png';
            randomNumber = Math.floor(Math.random() * 3);
            computerChoice;
            if (randomNumber > 0 && randomNumber <= 1) {
                computerChoice = 'Bat';
                document.querySelector('#computer').src = 'images/cricbat.png';
            } else if (randomNumber > 1 && randomNumber <= 2) {
                computerChoice = 'Ball';
                document.querySelector('#computer').src = 'images/cricball.png';
            } else {
                computerChoice = 'Stump';
                document.querySelector('#computer').src = 'images/cricstump.png';
            }

            let result;
            if (computerChoice === 'Bat') {
                resultMsg = 'user won';
                document.querySelector('#userwinner').style.display = "block";
                document.querySelector('#computerwinner').style.display = "none";
                music = 'sound/batsound.mp3';
            } else if (computerChoice === 'Stump') {
                resultMsg = 'match tied';
                document.querySelector('#computerwinner').style.display = "none";
                document.querySelector('#userwinner').style.display = "none";
                music = 'sound/Slap.mp3';
            } else {
                resultMsg = 'computer won';
                document.querySelector('#userwinner').style.display = "none";
                document.querySelector('#computerwinner').style.display = "block";
                music = 'sound/gunsount.mp3';
            }

            winnerSound(music);
            document.querySelector('#user').innerHTML = `${userChoiceMsg}`;
            document.querySelector('#computer').innerHTML = `Computer have choosen ${computerChoice}`;
            document.querySelector('#result').innerHTML = `${resultMsg}`;

        }



    } else {
        //  ******************************************predic mode ***********************************************


        // window.location.reload();

        if (r == 1) {
            console.log('predic mode')
            // user prediction random--------------
            // userChoiceMsg = 'Bat';
            // random choice by computer
            UserrandomNumber = Math.floor(Math.random() * 3);
            if (UserrandomNumber > 0 && UserrandomNumber <= 1) {
                userChoiceMsg = 'Ball';
                document.querySelector('#user').src = 'images/cricball.png';
                console.log('1 mode')
                console.log(userChoiceMsg)

            } else if (UserrandomNumber > 1 && UserrandomNumber <= 2) {
                userChoiceMsg = 'Bat';
                console.log(userChoiceMsg)
                console.log('2 mode')
                document.querySelector('#user').src = 'images/cricbat.png';
            } else {
                userChoiceMsg = 'Stump';
                console.log('3 mode')
                document.querySelector('#user').src = 'images/cricstump.png';
                console.log(userChoiceMsg)
            }

            // random choice by computer
            randomNumber = Math.floor(Math.random() * 3);
            if (randomNumber > 0 && randomNumber <= 1) {
                computerChoice = 'Bat';
                document.querySelector('#computer').src = 'images/cricbat.png';
            } else if (randomNumber > 1 && randomNumber <= 2) {
                computerChoice = 'Ball';
                document.querySelector('#computer').src = 'images/cricball.png';
            } else {
                computerChoice = 'Stump';
                document.querySelector('#computer').src = 'images/cricstump.png';
            }



            if (computerChoice === 'Ball') {
                resultMsg = 'user won';
                document.querySelector('#userwinner').style.display = "block";
                document.querySelector('#computerwinner').style.display = "none";
                document.querySelector('#result').innerHTML = `${resultMsg}`;
                music = 'sound/batsound.mp3';
            } else if (computerChoice === 'Stump') {
                resultMsg = 'computer won';
                document.querySelector('#userwinner').style.display = "none";
                document.querySelector('#userwinner').style.display = "none";
                document.querySelector('#computerwinner').style.display = "block";
                document.querySelector('#result').innerHTML = `${resultMsg}`;
                music = 'sound/gunsount.mp3';
            } else {
                document.querySelector('#computerwinner').style.display = "none";
                document.querySelector('#userwinner').style.display = "none";
                resultMsg = '<h1>match tied</h1>'
                document.querySelector('#result').innerHTML = `${resultMsg}`;
                music = 'sound/Slap.mp3';
            }



            winnerSound(music);
            document.querySelector('#computer').innerHTML = `Computer have choosen ${computerChoice}`;



        } else if (r == 2) {
            userChoiceMsg = 'Ball';
            randomNumber = Math.floor(Math.random() * 3);
            computerChoice;
            if (randomNumber > 0 && randomNumber <= 1) {
                computerChoice = 'Bat';
                document.querySelector('#computer').src = 'images/cricbat.png';
            } else if (randomNumber > 1 && randomNumber <= 2) {
                computerChoice = 'Ball';
                document.querySelector('#computer').src = 'images/cricball.png';
            } else {
                computerChoice = 'Stump';
                document.querySelector('#computer').src = 'images/cricstump.png';
            }


            let result;
            if (computerChoice === 'Bat') {
                resultMsg = 'computer won';
                document.querySelector('#userwinner').style.display = "none";
                document.querySelector('#computerwinner').style.display = "block";
                document.querySelector('#result').innerHTML = `${resultMsg}`;
                music = 'sound/batsound.mp3';
            } else if (computerChoice === 'Stump') {
                resultMsg = 'user won';
                document.querySelector('#userwinner').style.display = "block";
                document.querySelector('#computerwinner').style.display = "none";
                document.querySelector('#result').innerHTML = `${resultMsg}`;
                music = 'sound/gunsount.mp3';
            } else {
                resultMsg = 'match tied';
                document.querySelector('#computerwinner').style.display = "none";
                document.querySelector('#userwinner').style.display = "none";
                document.querySelector('#result').innerHTML = `${resultMsg}`;
                music = 'sound/Slap.mp3';
            }


            winnerSound(music)
            document.querySelector('#computer').innerHTML = `Computer have choosen ${computerChoice}`;



        } else {
            userChoiceMsg = 'Stump';
            randomNumber = Math.floor(Math.random() * 3);
            computerChoice;
            if (randomNumber > 0 && randomNumber <= 1) {
                computerChoice = 'Bat';
                document.querySelector('#computer').src = 'images/cricbat.png';
            } else if (randomNumber > 1 && randomNumber <= 2) {
                computerChoice = 'Ball';
                document.querySelector('#computer').src = 'images/cricball.png';
            } else {
                computerChoice = 'Stump';
                document.querySelector('#computer').src = 'images/cricstump.png';
            }

            let result;
            if (computerChoice === 'Bat') {
                resultMsg = 'user won';
                document.querySelector('#userwinner').style.display = "block";
                document.querySelector('#computerwinner').style.display = "none";
                music = 'sound/batsound.mp3';
            } else if (computerChoice === 'Stump') {
                resultMsg = 'match tied';
                document.querySelector('#computerwinner').style.display = "none";
                document.querySelector('#userwinner').style.display = "none";
                music = 'sound/Slap.mp3';
            } else {
                resultMsg = 'computer won';
                document.querySelector('#userwinner').style.display = "none";
                document.querySelector('#computerwinner').style.display = "block";
                music = 'sound/gunsount.mp3';
            }

            winnerSound(music);
            document.querySelector('#user').innerHTML = `${userChoiceMsg}`;
            document.querySelector('#computer').innerHTML = `Computer have choosen ${computerChoice}`;
            document.querySelector('#result').innerHTML = `${resultMsg}`;


        }

    }
}


function change() {
    document.querySelector('h1').style.color = 'white';
    document.querySelector('.game_container').style.backgroundColor = '#944E63';
    document.querySelector('#btn1').innerHTML = 'Click to Predict';
    document.querySelector('#btn2').style.display = 'none';
    document.querySelector('#btn3').style.display = 'none';
    // document.querySelector('.reverse').style.display = 'inline-block';
}

function reverse() {
    document.querySelector('h1').style.color = 'white';
    document.querySelector('.game_container').style.backgroundColor = 'green';
    document.querySelector('#btn1').innerHTML = 'Bat';
    document.querySelector('#btn2').style.display = 'inline-block';
    document.querySelector('#btn3').style.display = 'inline-block';
}