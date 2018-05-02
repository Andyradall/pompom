var duration = {};
var pomodoroMin = 25; 

duration.min = pomodoroMin;
duration.sec = 3;

// hente ut dom objects
var timeTextObject = document.querySelector('.duration_time');
var unitTextObject = document.querySelector('.duration_unit');
var startButton = document.querySelector('.start_btn');
var body = document.body;

// add function to click on button
startButton.addEventListener('click', knappetrykkFunksjon);

function knappetrykkFunksjon(event) {

    // skjule button etter trykket 
    startButton.classList.add('hidden');
    unitTextObject.classList.add('hidden');


    // starte interval timer
    var intervalObj = setInterval(handleInterval, 1000)

    function handleInterval() {
        console.log('handling Interval..')

        if (duration.min == 0 && duration.sec == 0) {
            console.log('done');

            clearInterval(intervalObj);
            playAlarm('Grattis!');
        } else {
            countDown();
            showDuration();
        }

    }
}

// decrease the duration by 1 secund
function countDown() {

    // decrease seconds
    duration.sec = duration.sec - 1;

    if (duration.sec < 0) {
        duration.min = duration.min - 1;
        duration.sec = 59;
    }

    console.log(duration);
}

function showDuration() {

    var min = duration.min;
    var sec = duration.sec;


    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }

    timeTextObject.textContent = min + ':' + sec;

}


function playAlarm(text){
    timeTextObject.textContent = text;
    setTimeout(resetClock, 3000);
}

function resetClock(){

    duration.min = pomodoroMin; 
    timeTextObject.textContent = duration.min;

    startButton.classList.remove('hidden');
    unitTextObject.classList.remove('hidden');

    

}

