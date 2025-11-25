// List of videos
const videos = [
  {
    title: "Saudi Real Estate 2025 - KSA Info",
    url: "https://www.youtube.com/embed/MCRqSRtDfAk",
    page: "saudi-real-estate-2025.html",
    thumb: "https://img.youtube.com/vi/MCRqSRtDfAk/hqdefault.jpg"
  },
  {
    title: "Umrah Vlog 2025 - Islamic Content",
    url: "https://www.youtube.com/embed/PTIeF0EXdCc",
    page: "umrah-vlog-2025.html",
    thumb: "https://img.youtube.com/vi/PTIeF0EXdCc/hqdefault.jpg"
  },
  {
    title: "Fahas Saudi 2024 - KSA Info",
    url: "https://www.youtube.com/embed/PUXhYrePrpU",
    page: "fahas-saudi-2024.html",
    thumb: "https://img.youtube.com/vi/PUXhYrePrpU/hqdefault.jpg"
  },
  {
    title: "MVPI Test Guide - KSA Info",
    url: "https://www.youtube.com/embed/MEso_vtY78k",
    page: "mvpi-test-guide.html",
    thumb: "https://img.youtube.com/vi/MEso_vtY78k/hqdefault.jpg"
  },
  {
    title: "Gaming PS5 Wheel - Gaming & Playstation",
    url: "https://www.youtube.com/embed/HJU6AvmYOwg",
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
    url: "https://www.youtube.com/embed/keLSsQ-OqlY",
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

    iframe.src = video.url;
    title.innerHTML = `<a href="${video.page}" target="_blank">${video.title}</a>`;
}

// Initial video
showVideo(currentIndex);

// Rotate video every 8 seconds
setInterval(() => {
    currentIndex++;
    if(currentIndex >= videos.length) currentIndex = 0;
    showVideo(currentIndex);
}, 8000);

// Generate thumbnails
const thumbContainer = document.getElementById('thumbnail-container');
videos.forEach((video, index) => {
    const thumbDiv = document.createElement('div');
    thumbDiv.className = "thumb-item";
    thumbDiv.innerHTML = `
        <a href="${video.page}" target="_blank">
            <img src="${video.thumb}" alt="${video.title}" />
            <p>${video.title}</p>
        </a>
    `;
    thumbContainer.appendChild(thumbDiv);
});
// --- Existing code for big video rotation ---
let currentIndex = 0;

function showVideo(index) {
    const video = videos[index];
    const iframe = document.getElementById('main-video');
    const title = document.getElementById('video-title');

    iframe.src = video.url;
    title.innerHTML = `<a href="${video.page}" target="_blank">${video.title}</a>`;
}

showVideo(currentIndex);

setInterval(() => {
    currentIndex++;
    if(currentIndex >= videos.length) currentIndex = 0;
    showVideo(currentIndex);
}, 8000);

// --- ADD THIS AT THE END: Generate thumbnails ---
const thumbContainer = document.getElementById('thumbnail-container');
thumbContainer.innerHTML = ''; // Clear any existing content

videos.forEach((video, index) => {
    const thumbDiv = document.createElement('div');
    thumbDiv.className = "thumb-item";
    thumbDiv.innerHTML = `
        <a href="${video.page}" target="_blank">
            <img src="https://img.youtube.com/vi/${video.url.split('/').pop()}/hqdefault.jpg" alt="${video.title}">
            <p>${video.title}</p>
        </a>
    `;
    thumbContainer.appendChild(thumbDiv);
});

