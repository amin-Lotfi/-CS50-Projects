document.addEventListener('DOMContentLoaded', function () {
  const audioFiles = [
    'https://archive.org/download/news-at-11-wmy7d8/%E7%8C%AB%20%E3%82%B7%20Corp.%20-%20NEWS%20AT%2011%20-%2010%20THE%20WEATHER%20CHANNEL%201.mp3',
    'https://archive.org/download/news-at-11-wmy7d8/%E7%8C%AB%20%E3%82%B7%20Corp.%20-%20NEWS%20AT%2011%20-%2011%20THE%20WEATHER%20CHANNEL%202.mp3',
    'https://archive.org/download/news-at-11-wmy7d8/%E7%8C%AB%20%E3%82%B7%20Corp.%20-%20NEWS%20AT%2011%20-%2012%20THE%20WEATHER%20CHANNEL%203.mp3',
    'https://archive.org/download/news-at-11-wmy7d8/%E7%8C%AB%20%E3%82%B7%20Corp.%20-%20NEWS%20AT%2011%20-%2013%20THE%20WEATHER%20CHANNEL%204.mp3',
    'https://archive.org/download/news-at-11-wmy7d8/%E7%8C%AB%20%E3%82%B7%20Corp.%20-%20NEWS%20AT%2011%20-%2014%20THE%20WEATHER%20CHANNEL%205.mp3',
    'https://archive.org/download/news-at-11-wmy7d8/%E7%8C%AB%20%E3%82%B7%20Corp.%20-%20NEWS%20AT%2011%20-%2015%20THE%20WEATHER%20CHANNEL%206.mp3',
    'https://archive.org/download/news-at-11-wmy7d8/%E7%8C%AB%20%E3%82%B7%20Corp.%20-%20NEWS%20AT%2011%20-%2016%20THE%20WEATHER%20CHANNEL%207.mp3',
    'https://archive.org/download/news-at-11-wmy7d8/%E7%8C%AB%20%E3%82%B7%20Corp.%20-%20NEWS%20AT%2011%20-%2017%20THE%20WEATHER%20CHANNEL%208.mp3',
    'https://archive.org/download/news-at-11-wmy7d8/%E7%8C%AB%20%E3%82%B7%20Corp.%20-%20NEWS%20AT%2011%20-%2018%20THE%20WEATHER%20CHANNEL%209.mp3',
    'https://archive.org/download/news-at-11-wmy7d8/%E7%8C%AB%20%E3%82%B7%20Corp.%20-%20NEWS%20AT%2011%20-%2019%20THE%20WEATHER%20CHANNEL%2010.mp3',
    'https://archive.org/download/news-at-11-wmy7d8/%E7%8C%AB%20%E3%82%B7%20Corp.%20-%20NEWS%20AT%2011%20-%2020%20THE%20WEATHER%20CHANNEL%2011.mp3',
  ]

  const audioPlayer = document.getElementById('audio-player')
  const audioSource = document.getElementById('audio-source')
  const playButton = document.getElementById('play-button')

  function setRandomAudioSource() {
    const randomIndex = Math.floor(Math.random() * audioFiles.length)
    const randomAudioFile = audioFiles[randomIndex]

    audioSource.src = randomAudioFile
    audioPlayer.load()
  }

  playButton.addEventListener('click', function () {
    setRandomAudioSource()
    audioPlayer.play()
  })
})
