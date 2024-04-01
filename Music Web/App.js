let left = document.getElementById('pop_left')
let right = document.getElementById('pop_right')
let pop_song = document.getElementsByClassName('pop_song')[0]

pop_right.addEventListener('click', () => {
    pop_song.scrolLeft += 330
})

pop_left.addEventListener('click', () => {
    pop_song.scrolLeft -= 330
})