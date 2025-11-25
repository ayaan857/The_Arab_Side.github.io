// List of videos with thumbnails
const videos = [
  {
    title: "Saudi Real Estate 2025 - KSA Info",
    url: "https://www.youtube.com/embed/MCRqSRtDfAk?si=MGWdDYwEYRIoseSM",
    page: "saudi-real-estate-2025.html",
    thumb: "https://img.youtube.com/vi/MCRqSRtDfAk/hqdefault.jpg"
  },
  {
    title: "Umrah Vlog 2025 - Islamic Content",
    url: "https://www.youtube.com/embed/PTIeF0EXdCc?si=3jgNzjFJ7aJZPx6U",
    page: "umrah-vlog-2025.html",
    thumb: "https://img.youtube.com/vi/PTIeF0EXdCc/hqdefault.jpg"
  },
  {
    title: "Fahas Saudi 2024 - KSA Info",
    url: "https://www.youtube.com/embed/PUXhYrePrpU?si=HxR9fFZb3mD0Urfj",
    page: "fahas-saudi-2024.html",
    thumb: "https://img.youtube.com/vi/PUXhYrePrpU/hqdefault.jpg"
  },
  {
    title: "MVPI Test Guide - KSA Info",
    url: "https://www.youtube.com/embed/MEso_vtY78k?si=axg-Oz_3UzKAJsAL",
    page: "mvpi-test-guide.html",
    thumb: "https://img.youtube.com/vi/MEso_vtY78k/hqdefault.jpg"
  },
  {
    title: "Gaming PS5 Wheel - Gaming & Playstation",
    url: "https://www.youtube.com/embed/HJU6AvmYOwg?si=dvMydeJYrU6KRryh",
    page: "ps5-gaming-wheel.html",
    thumb: "https://img.youtube.com/vi/HJU6AvmYOwg/hqdefault.jpg"
  },
  {
    title: "Car Decoration Ideas - Car Related",
    url: "https://www.youtube.com/embed/islamic-decoration-jayenamaz",
    page: "islamic-decoration-jayenamaz.html",
    thumb: "https://img.youtube.com/vi/islamic-decoration-jayenamaz/hqdefault.jpg"
  },
  {
    title: "Sharjah Airport 24 Hours - KSA Info",
    url: "https://www.youtube.com/embed/keLSsQ-OqlY?si=wu7ZbBf-C04f9GU2",
    page: "sharjah-airport-24-hours.html",
    thumb: "https://img.youtube.com/vi/keLSsQ-OqlY/hqdefault.jpg"
  }
];

let currentIndex = 0;

// Show big video
function showVideo(index) {
    const video = videos[index];
    const iframe = document.getElementById('main-video');
    const title = document.getElementById('video-title');

    if(!iframe || !title) return;

    iframe.src = video.url;
    title.innerHTML = `<a href="${video.page}" target="_blank">${video.title}</a>`;
}

// Initial big video
showVideo(currentIndex);

// Rotate videos every 8 seconds
setInterval(() => {
    currentIndex++;
    if(currentIndex >= videos.length) currentIndex = 0;
    showVideo(currentIndex);
}, 8000);

// Generate thumbnails
const thumbContainer = document.getElementById('thumbnail-container');
thumbContainer.innerHTML = ''; // Clear existing content

videos.forEach((video, index) => {
    const thumbDiv = document.createElement('div');
    thumbDiv.className = "thumb-item";
    thumbDiv.innerHTML = `
        <a href="${video.page}" target="_blank">
            <img src="${video.thumb}" alt="${video.title}">
            <p>${video.title}</p>
        </a>
    `;
    thumbContainer.appendChild(thumbDiv);
});

