// List of videos with categories
const videos = [
  {
    title: "Saudi Real Estate 2025 - KSA Info",
    page: "saudi-real-estate-2025.html",
    thumb: "https://img.youtube.com/vi/MCRqSRtDfAk/hqdefault.jpg",
    category: "ksa-info"
  },
  {
    title: "Umrah Vlog 2025 - Islamic Content",
    page: "umrah-vlog-2025.html",
    thumb: "https://img.youtube.com/vi/PTIeF0EXdCc/hqdefault.jpg",
    category: "islamic"
  },
  {
    title: "Fahas Saudi 2024 - KSA Info",
    page: "fahas-saudi-2024.html",
    thumb: "https://img.youtube.com/vi/PUXhYrePrpU/hqdefault.jpg",
    category: "ksa-info"
  },
  {
    title: "MVPI Test Guide - KSA Info",
    page: "mvpi-test-guide.html",
    thumb: "https://img.youtube.com/vi/MEso_vtY78k/hqdefault.jpg",
    category: "ksa-info"
  },
  {
    title: "Gaming PS5 Wheel - Gaming & Playstation",
    page: "ps5-gaming-wheel.html",
    thumb: "https://img.youtube.com/vi/HJU6AvmYOwg/hqdefault.jpg",
    category: "gaming"
  },
  {
    title: "Car Decoration Ideas - Car Related",
    page: "islamic-decoration-jayenamaz.html",
    thumb: "https://img.youtube.com/vi/islamic-decoration-jayenamaz/hqdefault.jpg",
    category: "car"
  },
  {
    title: "Sharjah Airport 24 Hours - KSA Info",
    page: "sharjah-airport-24-hours.html",
    thumb: "https://img.youtube.com/vi/keLSsQ-OqlY/hqdefault.jpg",
    category: "ksa-info"
  }
];

// Function to generate thumbnails for each category
videos.forEach(video => {
    const container = document.getElementById(video.category);
    if(container){
        const div = document.createElement('div');
        div.className = "thumb-item";
        div.innerHTML = `
            <a href="${video.page}" target="_blank">
                <img src="${video.thumb}" alt="${video.title}">
                <p>${video.title}</p>
            </a>
        `;
        container.appendChild(div);
    }
});
