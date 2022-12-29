const music = document.querySelector("audio");
    const play = document.getElementById("play");
    const songname = document.getElementById("title");
    const next = document.getElementById("next");
    const previous = document.getElementById("previous");

    //songlist//
    let songs = [
        { songname: "The Night Will Always Win - Elbow", filepath: "./music/The_night_will_always_win.mp3" },
        { songname: "Glass Animals - Heat Waves", filepath: "./music/Glass Animals - Heat Waves.mp3" },
        { songname: "Stephen Sanchez - Until I Found You", filepath: "./music/Stephen Sanchez - Until I Found You.mp3" },
        { songname: "The Chainsmokers, Coldplay - Something Just Like This", filepath: "./music/The Chainsmokers, Coldplay - Something Just Like This.mp3" },
        { songname: "Alan Walker - Force", filepath: "./music/Alan Walker - Force.mp3" },
    ]



    let newstatus = false;

    //to play//
    function playMusic() {
        newstatus = true;
        music.play();
        document.getElementById("play").style.color = "red";
        document.getElementById("disc").style.animation = "rotate 1s linear infinite";
    }
    //to pause//
    function pauseMusic() {
        newstatus = false;
        music.pause();
        document.getElementById("play").style.color = "rgb(0, 160, 3)";
        document.getElementById("disc").style.animation = "rotate 10s linear infinite";
    }

    play.addEventListener("click", function () {
        if (newstatus) {
            pauseMusic();
        } else {
            playMusic();
        }
    })

    const loadsongs = function(songs){
        songname.textContent = songs.songname;
        music.src = songs.filepath;
    }

    let Index = 0;

    const nextSong = function (){
        Index = (Index + 1) % songs.length;
        loadsongs(songs[Index]);
        playMusic();
    }

    const previousSong = function (){
        Index = (Index - 1 + songs.length) % songs.length;
        loadsongs(songs[Index]);
        playMusic();
    }

    next.addEventListener("click", nextSong);
    previous.addEventListener("click", previousSong);