import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
    
    width: 640
});


player.setCurrentTime(savedCurentTime()).then(function (seconds) {
    
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

player.on('timeupdate', throttle(function (data) {
   
    localStorage.setItem("videoplayer-current-time", data.seconds);
},1000));


function savedCurentTime() {
    const savedTime = localStorage.getItem("videoplayer-current-time");
    if (savedTime) {
        console.log(savedTime); 
        return savedTime;  
    };
    
};
