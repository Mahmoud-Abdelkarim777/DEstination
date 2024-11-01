// jQuery date picker
$( function() {
        $( "#inputCheckIn" ).datepicker();
        $( "#inputCheckOut" ).datepicker();
    } );
// JQuery carousel 
$(document).ready(function(){
        $('.carousel').slick({
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                        }
                    }
                ]
        });
    });
// video-control-pause & video-control-play 
function videoToggle() {
    const video = document.querySelector('.video-container .video');
    const playButton = document.querySelector('.video-control-play');
    const pauseButton = document.querySelector('.video-control-pause');
    if (video.paused) {
        video.play();
        playButton.style.display = 'none';
        pauseButton.style.display = 'block';
    } else {
        video.pause();
        playButton.style.display = 'block';
        pauseButton.style.display = 'none';
    }
}
document.querySelector('.video-control-play').addEventListener('click', videoToggle);
document.querySelector('.video-control-pause').addEventListener('click', videoToggle);
// arrow up
function arrwUP() {
    const arrow = document.querySelector('.body-arrow-up');
    if (window.scrollY > 100) {
        arrow.style.display = 'block';
    } else {
        arrow.style.display = 'none';
    }
}
function srcollToTop() {
    window.scrollTo({
        top: 0,
        behavior:'smooth',
    });
}
srcollToTop();
 // window scroll event
window.addEventListener('scroll', arrwUP);