// VIDEOS
var body = document.querySelector('body');
var videoWrapper = document.querySelector('main section:nth-of-type(1)');

document.querySelector('button').onclick = function () {
    document.querySelector('main section:nth-of-type(1) video:first-of-type').play();
    document.querySelector('main section:nth-of-type(1) video:last-of-type').play();
    videoWrapper.classList.add('playing');
    body.classList.add('playing');
}



// TENSION INCREASE ANIMATION TIMERS
var tensionDelayInterval = setInterval( tensionDelayStart, 10);
function tensionDelayStart() {
    if (body.classList.contains('sound10')) {
        
        // START TENSION INTERVAL 
        var tensionInteger = 0;
        var tensionDuration = 42.5;
        var tensionInterval = setInterval( tensionIncrement, 1000);

        function tensionIncrement(){
            tensionSeconds = ++tensionInteger;
            console.log(tensionSeconds);

            body.style.setProperty("--tension-duration", tensionDuration);
            videoWrapper.style.setProperty("--tension-integer", tensionSeconds);
            videoWrapper.style.setProperty("--tension-duration", tensionDuration);
            
            if (tensionSeconds >= tensionDuration) {
                clearInterval(tensionInterval);
            }
        }
        
        // CLEAR TENSION INTERVAL DELAY TIMER
        clearInterval(tensionDelayInterval);
    }
}
