// capture DOM elements
const video = document.querySelector("video");
const playBtn = document.getElementById("playBtn");
const soundBtn = document.getElementById("soundBtn");
const slider = document.getElementById("slider");
const videoTiming = document.getElementById("videoTiming");
const loopBtn = document.getElementById("loopBtn");
const container = document.getElementById("container");
const videoControlsContainer = document.getElementById("videoControlsContainer");
const sliderContainer = document.getElementById("sliderContainer");
const fsBtn = document.getElementById("fsBtn");

// declaring variables
let videoLength;
let videoUserPosition;
let fullScreen = false;




// declare functions 

// toggle the video
function toggleVideo()
{

    if ( video.paused )
    {
        video.play();
        playBtn.style.backgroundImage = "url('resources/img/pauseBtnVideoPlayer.png')";

        // calculate video duration
        videoLength = video.duration;

    }
    else{
        video.pause();
        playBtn.style.backgroundImage = "url('resources/img/playBtnVideoPlayer.png')";
    }

}

// toggle the video sound
function toggleSound()
{
    if ( video.muted )
    {
        video.muted = false;
        soundBtn.style.backgroundImage = "url('resources/img/loudSpeakerBtnVideoPlayer.png')";

    }
    else{
        video.muted = true;
        soundBtn.style.backgroundImage = "url('resources/img/mutedSpeakerBtnVideoPlayer.png')";
    }

}

// when video ends
function togglePlaybtn()
{
    playBtn.style.backgroundImage = "url('resources/img/playBtnVideoPlayer.png')";
}

// setting Video Slider
function settingVideoSlider()
{
    // setting slider max value to length of video
    slider.max = videoLength;

    // while the video is playing know the position we are at
    videoUserPosition = video.currentTime;

    // move the slider in sync with the video progress
    slider.value = videoUserPosition;
}

// function for calculating time in minute and seconds (takes time in second and return array[minutes,seconds])
function timeMinuteSecondConverter(timeGiven)
{
    let minutes = Math.floor(timeGiven / 60);
    let seconds = timeGiven - minutes * 60;

    let timeResult = [minutes,seconds];

    return timeResult;
}

// to display time
function displayTime()
{
    let totalTime = timeMinuteSecondConverter(videoLength);
    let playedTime = timeMinuteSecondConverter(videoUserPosition);

    videoTiming.innerHTML = `${playedTime[0]}:${Math.floor(Math.round((playedTime[1] + Number.EPSILON) * 100) / 100)} / ${totalTime[0]}:${totalTime[1]}`;
}

// function fires on clicling the slider
function sliderClicked(event)
{
    // measuring the offset position in seconds by equation
    let positionInSeconds =  (event.offsetX * videoLength) / (slider.clientWidth);
    video.currentTime = positionInSeconds;
}

// toggle the loop for video
function toggleLoop()
{
    if ( video.loop )
    {
        video.loop = false;
        loopBtn.style.backgroundImage = "url('resources/img/loopVideo1.png')";

    }
    else{
        video.loop = true;
        loopBtn.style.backgroundImage = "url('resources/img/loopVideo2.png')";
    }

}


// toggle the full screen
function togglefs()
{
    if (!fullScreen)
    {
        // trigger full screen mode
        if (container.requestFullscreen) {
            container.requestFullscreen();
          } else if (container.webkitRequestFullscreen) { /* Safari */
            container.webkitRequestFullscreen();
          } else if (container.msRequestFullscreen) { /* IE11 */
            container.msRequestFullscreen();
        }

        // reset the variable fullScreen to true
        fullScreen = true;

        // check if we are on a computer or a mobile and excute relative functions
        if ( window.navigator.platform === "HP-UX" || window.navigator.platform === "Linux i686" || window.navigator.platform === "Linux armv7l" || window.navigator.platform === "Mac68K" || window.navigator.platform === "MacPPC" || window.navigator.platform === "MacIntel" || window.navigator.platform === "SunOS" || window.navigator.platform === "Win16" || window.navigator.platform === "Win32" || window.navigator.platform === "WinCE")
        {
            // computer :

            // reseting the styles to the change in screen width and height
            // video
            video.style.width = "100%";
            video.style.height = "100%";
            // video Controls Container
            videoControlsContainer.style.height = "10%";
            // slider container
            sliderContainer.style.width = "70%";
            // video timing 
            videoTiming.style.left = "unset";
            videoTiming.style.right = "-167px";
            // full screen button
            fsBtn.style.left = "unset";
            fsBtn.style.right = "30px";
        }
        else 
        {
            // mobile
        }
        

    }
    else
    {
        // closes full screen mode
        if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }

        // reset the variable fullScreen to false
        fullScreen = false;

        // check if we are on a computer or a mobile and excute relative functions
        if ( window.navigator.platform === "HP-UX" || window.navigator.platform === "Linux i686" || window.navigator.platform === "Linux armv7l" || window.navigator.platform === "Mac68K" || window.navigator.platform === "MacPPC" || window.navigator.platform === "MacIntel" || window.navigator.platform === "SunOS" || window.navigator.platform === "Win16" || window.navigator.platform === "Win32" || window.navigator.platform === "WinCE")
        {
            // computer :

            // reseting the styles back to normal width and height of page
            // video
            video.style.width = "900px";
            video.style.height = "500px";
            // video Controls Container
            videoControlsContainer.style.height = "15%";
            // slider container
            sliderContainer.style.width = "565px";
            // video timing 
            videoTiming.style.left = "586px";
            videoTiming.style.right = "unset";
            // full screen button
            fsBtn.style.left = "849px";
            fsBtn.style.right = "unset";
        }
        else 
        {
            // mobile
        }
        

    }

}

