// List of videos
const videos = [
  {
    title: "Saudi Real Estate 2025 - KSA Info",
    url: "https://www.youtube.com/embed/MCRqSRtDfAk",
    page: "saudi-real-estate-2025.html"
  },
  {
    title: "Umrah Vlog 2025 - Islamic Content",
    url: "https://www.youtube.com/embed/PTIeF0EXdCc",
    page: "umrah-vlog-2025.html"
  },
  {
    title: "Fahas Saudi 2024 - KSA Info",
    url: "https://www.youtube.com/embed/PUXhYrePrpU",
    page: "fahas-saudi-2024.html"
  },
  {
    title: "MVPI Test Guide - KSA Info",
    url: "https://www.youtube.com/embed/MEso_vtY78k",
    page: "mvpi-test-guide.html"
  },
  {
    title: "Gaming PS5 Wheel - Gaming & Playstation",
    url: "https://www.youtube.com/embed/HJU6AvmYOwg",
    page: "ps5-gaming-wheel.html"
  },
  {
    title: "Car Decoration Ideas - Car Related",
    url: "https://www.youtube.com/embed/islamic-decoration-jayenamaz",
    page: "islamic-decoration-jayenamaz.html"
  },
  {
    title: "Sharjah Airport 24 Hours - KSA Info",
    url: "https://www.youtube.com/embed/keLSsQ-OqlY",
    page: "sharjah-airport-24-hours.html"
  }
];

let currentIndex = 0;

// Show a video
function showVideo(index) {
    const video = videos[index];
    const iframe = document.getElementById('main-video');
    const title = document.getElementById('video-title');

    if (!iframe || !title) return; // stop if elements not found

    iframe.src = video.url;
    title.innerHTML = `<a href="${video.page}" target="_blank">${video.title}</a>`;
}

// Initial video
showVideo(currentIndex);

// Rotate videos every 8 seconds
setInterval(() => {
    currentIndex++;
    if (currentIndex >= videos.length) currentIndex = 0;
    showVideo(currentIndex);
}, 8000);
