{
    function updateTime() {
        const now = new Date()
        const day = now.getDay()
        const hours = now.getHours()
        const minutes = now.getMinutes()
        const seconds = now.getSeconds()
        const clockStr = `${day.toString().padStart(1, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        const timeElement = document.getElementById("clock")
        timeElement.innerText = clockStr
    }

    updateTime()
    setInterval(updateTime, 1000)
}