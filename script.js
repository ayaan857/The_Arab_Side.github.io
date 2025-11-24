// -------------------------------
// VIDEO LIST: add or remove entries here
// Each item: { id: 'YouTubeID', title: 'Title' }
// Example ID for https://www.youtube.com/watch?v=dQw4w9WgXcQ  -> id: 'dQw4w9WgXcQ'
const videos = [
  { id: "keLSsQ-OqlY", title: "24 Hours at Sharjah Airport ✈️ Exploring Duty Free, Flight Delay Experience " },
  { id: "PTIeF0EXdCc", title: "Umrah Vlog 2025 | Taif To Makkah | Best Kabah Views | Haram Makkah" },
  { id: "MCRqSRtDfAk", title: "Saudi Arabia 2025 Real Estate & Rents | Jobs, Mega Projects & Property Prices" },
  { id: "HJU6AvmYOwg", title: "ALL ON ONE PS4 PS5 GAMING STEERING-WHEEL AND SO ON / ps5 dubai / video games" },
  { id: "hbq5UwBKx3o", title: "Jayenamaz Islamic Decoration pieces or bohot kuch | Ghilaf e Kaaba | Ayaan Aamir" },
  { id: "PUXhYrePrpU", title: "Fahas Saudi Arabia 2024 🇸🇦 MVPI Test 2025 | How to clear for fahas 1st time |MVPI saudi arabia" }
];
// -------------------------------

document.getElementById("year").textContent = new Date().getFullYear();

const gallery = document.getElementById("gallery");
const modal = document.getElementById("videoModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const videoWrap = document.getElementById("videoWrap");
const videoCaption = document.getElementById("videoCaption");

// Build gallery
function buildGallery(){
  gallery.innerHTML = "";
  videos.forEach((v, idx) => {
    const card = document.createElement("article");
    card.className = "card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Play ${v.title}`);
    
    const thumbUrl = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;

    card.innerHTML = `
      <img loading="lazy" class="thumb" src="${thumbUrl}" alt="${v.title} thumbnail">
      <div class="card-body">
        <h3 class="title">${v.title}</h3>
        <div class="meta">YouTube • ${v.id}</div>
      </div>
    `;

    card.addEventListener("click", () => openModal(v));
    card.addEventListener("keypress", (e) => { 
      if (e.key === "Enter" || e.key === " ") openModal(v); 
    });

    gallery.appendChild(card);
  });
}

// Open modal with YouTube embed
function openModal(video){
  videoWrap.innerHTML = "";
  videoCaption.textContent = video.title || "";

  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${video.id}?rel=0&autoplay=1`;
  iframe.setAttribute("allow", "autoplay; encrypted-media; picture-in-picture");
  iframe.setAttribute("allowfullscreen", "");
  iframe.title = video.title || "YouTube video player";

  videoWrap.appendChild(iframe);
  modal.setAttribute("aria-hidden", "false");

  modalClose.focus();
}

// Close modal
function closeModal(){
  modal.setAttribute("aria-hidden", "true");
  videoWrap.innerHTML = "";
}

// Events
modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") closeModal();
});

// Init
buildGallery();
