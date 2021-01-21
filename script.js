const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// loop through
sounds.forEach((sound) => {
  // create buttons
  const btn = document.createElement('button')
  btn.classList.add('btn')

  btn.innerText = sound

  btn.addEventListener('click', () => {
    stopSongs()
    document.getElementById(sound).play()
  })

  document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound)

    song.onpause()
    song.currentTime = 0
  })
}
