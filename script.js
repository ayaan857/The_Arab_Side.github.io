// -------------------------------
// VIDEO LIST: add or remove entries here
// Each item: { id: 'YouTubeID', title: 'Title' }
// Example ID for https://www.youtube.com/watch?v=dQw4w9WgXcQ  -> id: 'dQw4w9WgXcQ'
const videos = [
  { id: "keLSsQ-OqlY", title: "Video 1" },
  { id: "PTIeF0EXdCc", title: "Video 2" },
  { id: "MCRqSRtDfAk", title: "Video 3" },
  { id: "HJU6AvmYOwg", title: "Video 4" },
  { id: "hbq5UwBKx3o", title: "Video 5" },
  { id: "PUXhYrePrpU", title: "Video 6" }
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
