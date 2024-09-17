// Basic array of songs (you can expand this)
const songs = [
    {
      title: "Song 1",
      artist: "Artist 1",
      src: "song1.mp3",
      cover: "https://img.freepik.com/free-psd/square-flyer-template-maximalist-business_23-2148524497.jpg?size=338&ext=jpg&ga=GA1.1.1788614524.1726185600&semt=ais_hybrid"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      src: "song2.mp3",
      cover: "https://i.pinimg.com/736x/80/c7/f0/80c7f0ef272233a66933048c208e1084.jpg"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      src: "song3.mp3",
      cover: "https://freepsdflyer.com/wp-content/uploads/2021/06/Free-Spotify-Album-Cover-PSD-Template.jpg"
    }
  ];
  
  const albumCovers = document.querySelectorAll(".album img");
  const audioPlayer = document.getElementById("audio-player");
  const songTitle = document.getElementById("song-title");
  const artistName = document.getElementById("artist-name");
  const albumCover = document.getElementById("album-cover");
  
  // Add event listeners to album covers
  albumCovers.forEach((cover, index) => {
    cover.addEventListener("click", () => {
      playSong(index);
    });
  });
  
  // Function to play song
  function playSong(index) {
    const song = songs[index];
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    audioPlayer.src = song.src;
    albumCover.src = song.cover;
    audioPlayer.play();
  }
  