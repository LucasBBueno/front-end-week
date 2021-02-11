document.addEventListener('DOMContentLoaded', () => {
    var vid = document.getElementById("spiderman-video");
    vid.volume = 0;

    let tl = new TimelineMax();

    tl.fromTo('.bg-loader', 1, 
        { width: '100%'},
        { width: '0%', delay: 5, ease: Expo.easeInOut}
    )

    .fromTo('.bg-video', 2,
        { width: '0%', opacity: 0 },
        { width: '100%', opacity: 1, ease: Expo.easeInOut }, '-=1' //adiantar 1 segundo
    )

    .fromTo('.logo', 0.7,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5'
    )

    .fromTo('.nav-list', 0.7,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5'
    )

    .fromTo('.nav-social', 0.7,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5'
    )

    .fromTo('.item-1', 0.7,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5'
    )

    .fromTo('.item-2', 0.7,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5'
    )

    .fromTo('.item-3', 0.7,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5'
    )

    .fromTo('.item-4', 0.7,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5'
    )

    .fromTo('.item-5', 0.7,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5'
    )

});

function activateVideoSound() {
    let soundXDisplay = document.getElementById("sound-icon-x").style.display;

    if(soundXDisplay == 'initial') {
        document.getElementById("sound-icon-x").style.display = 'none';
        document.getElementById("sound-icon-volume-2").style.display = 'initial';

        var vid = document.getElementById("spiderman-video");
        vid.volume = 0.35;
    } else {
        document.getElementById("sound-icon-x").style.display = 'initial';
        document.getElementById("sound-icon-volume-2").style.display = 'none';

        var vid = document.getElementById("spiderman-video");
        vid.volume = 0;
    }
}