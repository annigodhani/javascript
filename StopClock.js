{
    let intervalId

    function updateTime() {
        const now = new Date()
        const hours = now.getHours()
        const minutes = now.getMinutes()
        const seconds = now.getSeconds()
        const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        const timeElement = document.getElementById("clock")
        timeElement.innerText = clockStr
    }

    function startClock() {
        intervalId = setInterval(updateTime, 1000)
    }

    function stopClock() {
        clearInterval(intervalId)
    }

    document.getElementById("stopButton").addEventListener("click", function () {
        if (this.innerText === "Stop Clock") {
            stopClock()
            this.innerText = "Start Clock"
        }
        else {
            startClock()
            this.innerText = "Stop Clock"
        }
    })

    startClock()
}