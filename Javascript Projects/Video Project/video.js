function myFunction(){ 
    const chk = document.querySelector('#chk')
    const bgVideo = document.querySelector('#bgVideo');

    if (bgVideo.paused) {
        bgVideo.play();
    } else {
       bgVideo.pause();
    }
};