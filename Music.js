{
    let Prog = document.getElementById("Prog")
    let Song = document.getElementById("Song")
    let ctl = document.getElementById("ctrl")

    Song.onloadeddata = function () {
        Prog.max = Song.duration
        Prog.value = Song.currentTime
    }

    function playPause() {
        if (Song.paused) {
            Song.play()
            ctl.classList.remove("fa-play")
            ctl.classList.add("fa-pause")
            updateProgressBar()
        }
        else {
            Song.pause()
            ctl.classList.remove("fa-pause")
            ctl.classList.add("fa-play")
        }
    }

    function updateProgressBar() {
        setInterval(() => {
            Prog.value = Song.currentTime
            if (Song.ended) {
                ctl.classList.remove("fa-pause")
                ctl.classList.add("fa-play")
                Prog.value = 0
            }
        }, 500)
    }

    Prog.onchange = function () {
        Song.currentTime = Prog.value
        if (Song.paused) {
            Song.play()
            ctl.classList.remove("fa-play")
            ctl.classList.add("fa-pause")
        }
    }
}



