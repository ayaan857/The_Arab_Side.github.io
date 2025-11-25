// -------------------------------
// VIDEO LIST
// -------------------------------
const videos = [
  { id: "keLSsQ-OqlY", title: "24 Hours at Sharjah Airport ✈️ Exploring Duty Free, Flight Delay Experience", category: "KSA" },
  { id: "PTIeF0EXdCc", title: "Umrah Vlog 2025 | Taif To Makkah | Best Kabah Views | Haram Makkah", category: "Islamic" },
  { id: "MCRqSRtDfAk", title: "Saudi Arabia 2025 Real Estate & Rents | Jobs, Mega Projects & Property Prices", category: "KSA" },
  { id: "HJU6AvmYOwg", title: "ALL ON ONE PS4 PS5 Gaming Steering-Wheel / PS5 Dubai / Video Games", category: "Gaming" },
  { id: "hbq5UwBKx3o", title: "Jayenamaz Islamic Decoration Pieces | Ghilaf e Kaaba | Ayaan Aamir", category: "Islamic" },
  { id: "PUXhYrePrpU", title: "Fahas Saudi Arabia 2024 🇸🇦 How to Clear MVPI Test First Time", category: "Car" },
  { id: "MEso_vtY78k", title: "Make Your Car Perfect for MVPI Test | Fahas Test Kaise Pass Karein", category: "Car" }
];

// -------------------------------
// DOM ELEMENTS
// -------------------------------
const gallery = document.getElementById("video-gallery");
const filterButtons = document.querySelectorAll("#filters .filter-btn");
const modal = document.getElementById("video-modal");
const videoFrame = document.getElementById("video-frame");
const modalClose = document.getElementById("modal-close");
const darkToggle = document.getElementById("dark-mode-toggle");
const welcomeOverlay = document.getElementById("welcome-overlay");

// -------------------------------
// GALLERY RENDER FUNCTION
// -------------------------------
function renderVideos(filter) {
  gallery.innerHTML = "";
  videos.forEach(v => {
    if (filter === "all" || v.category === filter) {
      const div = document.createElement("div");
      div.classList.add("video-item");

      const img = document.createElement("img");
      img.src = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
      img.alt = v.title;

      const caption = document.createElement("div");
      caption.className = "title";
      caption.textContent = v.title;

      div.appendChild(img);
      div.appendChild(caption);

      div.addEventListener("click", () => openModal(v.id));

      gallery.appendChild(div);
    }
  });
}

// -------------------------------
// FILTERING
// -------------------------------
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderVideos(btn.dataset.category === "all" ? "all" : btn.dataset.category);
  });
});

// -------------------------------
// MODAL PLAYER
// -------------------------------
function openModal(videoId) {
  videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  modal.style.display = "block";
}

modalClose.onclick = () => {
  modal.style.display = "none";
  videoFrame.src = "";
};

window.onclick = event => {
  if (event.target === modal) {
    modal.style.display = "none";
    videoFrame.src = "";
  }
};

// -------------------------------
// DARK MODE TOGGLE
// -------------------------------
function setDarkMode(enabled) {
  document.body.classList.toggle("dark-mode", enabled);
  darkToggle.textContent = enabled ? "☀️" : "🌙";
  localStorage.setItem("darkMode", enabled);
}

darkToggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark-mode");
  setDarkMode(!isDark);
});

const savedTheme = localStorage.getItem("darkMode");
if (savedTheme === "true") setDarkMode(true);

// -------------------------------
// WELCOME ANIMATION
// -------------------------------
window.addEventListener("load", () => {
  setTimeout(() => {
    if (welcomeOverlay) welcomeOverlay.style.display = "none";
  }, 4000); // fade overlay after 4 seconds
});

// -------------------------------
// INITIAL LOAD
// -------------------------------
renderVideos("all");
