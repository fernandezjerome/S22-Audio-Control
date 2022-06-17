// create a module for our project
(() => {
    // create a reference to the main headline (the first h2 element)

    // querySelector can accept ANY valid CSS selector with any kind of complexity (which makes it kinda like a Swiss army knife for selecting elements) - use it for anything

    // getElementById, getElementByClassName, etc are all older selectors that are more specific but still useful
    let mainHeadline = document.querySelector('#main-headline'),
        theAudio = document.querySelector('audio'),
        theThumbs = document.querySelectorAll('img'),
        playBut = document.getElementById('play-button'),
        pauseBut = document.getElementById('stop-button'),
        rewindBut = document.getElementById('rewind-button');

    // functions go in the middle -> the brains / logic of your app
    function loadAudioTrack() {
        // change the audio element's source attribute
        theAudio.src = `audio/${this.dataset.trackref}.mp3`;

        // run the load and play media methods
        theAudio.load();

        playAudio();
    }

    function playAudio() { theAudio.play(); }

    function pauseAudio() { theAudio.pause(); }

    function rewindAudio() { theAudio.currentTime = 0; }

    // event handling goes here
    // listen for a click on the thumbnail images, load the right audio when the click happens
    theThumbs.forEach(thumb => thumb.addEventListener('click', loadAudioTrack));

    playBut.addEventListener('click', playAudio);
    pauseBut.addEventListener('click', pauseAudio);
    rewindBut.addEventListener('click', rewindAudio);
})()
