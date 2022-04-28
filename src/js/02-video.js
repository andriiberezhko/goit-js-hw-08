import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
    // id: "vimeo-player",
    width: 640
});

// player.on('play', function() {
//     console.log('played the video!');
// });
const videoData = function (data) {
    console.log(data);
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
};
player.on('timeupdate', videoData);

