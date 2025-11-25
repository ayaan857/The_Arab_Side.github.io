/* script.js - Homepage playlist + YouTube IFrame API autoplay/next + simple menu toggle (no JSON) */

/* Playlist (hardcoded) */
const PLAYLIST = [
  {
    id: "MCRqSRtDfAk",
    title: "Saudi Real Estate Market 2025 – Property Buying Guide for Expats & Investors",
    page: "video1.html",
    thumbnail: "https://img.youtube.com/vi/MCRqSRtDfAk/hqdefault.jpg",
    category: "KSA Information",
    description: "A comprehensive guide to buying property in Saudi Arabia in 2025 — tips for expats, investors, and renters."
  },
  {
    id: "PTIeF0EXdCc",
    title: "Umrah 2025 Complete Guide – Rules, Tips & Step-By-Step Pilgrimage Process",
    page: "video2.html",
    thumbnail: "https://img.youtube.com/vi/PTIeF0EXdCc/hqdefault.jpg",
    category: "Islamic Content",
    description: "Step-by-step Umrah guide for 2025 with tips on preparation, rituals, and travel advice."
  },
  {
    id: "PUXhYrePrpU",
    title: "Complete FAHAS Guide 2025 – How to Pass Saudi Vehicle Inspection Easily",
    page: "video3.html",
    thumbnail: "https://img.youtube.com/vi/PUXhYrePrpU/hqdefault.jpg",
    category: "Car Related",
    description: "Everything you need to know about FAHAS vehicle inspections in Saudi Arabia for 2025."
  },
  {
    id: "HJU6AvmYOwg",
    title: "Top Saudi Gaming Tips 2025 – Best Gameplay Tricks for Beginners & Pros",
    page: "video4.html",
    thumbnail: "https://img.youtube.com/vi/HJU6AvmYOwg/hqdefault.jpg",
    category: "Gaming and Playstation",
    description: "Pro tips, settings, and techniques to improve your gameplay on PlayStation and other platforms."
  },
  {
    id: "keLSsQ-OqlY",
    title: "Saudi Airport Arrival Guide 2025 – Step-by-Step Travel Process for Visitors",
    page: "video5.html",
    thumbnail: "https://img.youtube.com/vi/keLSsQ-OqlY/hqdefault.jpg",
    category: "KSA Information",
    description: "A 24-hour walkthrough for arriving and navigating Saudi airports and nearby services."
  },
  {
    id: "MEso_vtY78k",
    title: "MVPI Test Requirements 2025 – Full Saudi Car Inspection Guide for Beginners",
    page: "video6.html",
    thumbnail: "https://img.youtube.com/vi/MEso_vtY78k/hqdefault.jpg",
    category: "Car Related",
    description: "Guide to MVPI testing, required documents, and how to ensure your car passes inspection."
  },
  {
    id: "keLSsQ-OqlY",
    title: "Car Ownership in Saudi Arabia 2025 – Registration, Renewal & Inspection Guide",
    page: "video7.html",
    thumbnail: "https://img.youtube.com/vi/keLSsQ-OqlY/hqdefault.jpg",
    category: "KSA Information",
    description: "Complete overview of vehicle registration, renewal, and inspection processes in Saudi Arabia."
  }
];

/* HOMEPAGE PLAYER LOGIC using YouTube IFrame API */
let ytPlayer;
let currentIndex = 0;
let isPlayerReady = false;

/* load youtube api */
function loadYouTubeAPI(onload) {
  if (window.YT && window.YT.Player) {
    onload();
    return;
  }
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
  window.onYouTubeIframeAPIReady = onload;
}

/* create player */
function createPlayer() {
  ytPlayer = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: PLAYLIST[currentIndex].id,
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
      modestbranding: 1,
      enablejsapi: 1
    },
    events: {
      'onReady': (e) => {
        isPlayerReady = true;
        e.target.playVideo();
        renderMeta();
      },
      'onStateChange': onPlayerStateChange
    }
  });
}

/* when video ends -> next */
function onPlayerStateChange(event) {
  // 0 = ended
  if (event.data === YT.PlayerState.ENDED) {
    nextVideo();
  }
}

/* load next video */
function nextVideo() {
  currentIndex = (currentIndex + 1) % PLAYLIST.length;
  if (isPlayerReady && ytPlayer && typeof ytPlayer.loadVideoById === 'function') {
    ytPlayer.loadVideoById(PLAYLIST[currentIndex].id);
    renderMeta();
  }
}

/* load previous video */
function prevVideo() {
  currentIndex = (currentIndex - 1 + PLAYLIST.length) % PLAYLIST.length;
  if (isPlayerReady && ytPlayer && typeof ytPlayer.loadVideoById === 'function') {
    ytPlayer.loadVideoById(PLAYLIST[currentIndex].id);
    renderMeta();
  }
}

/* render title, badge and thumbnails */
function renderMeta() {
  const metaTitle = document.getElementById('meta-title');
  const metaBadge = document.getElementById('meta-badge');
  const openBtn = document.getElementById('openPageBtn');

  const video = PLAYLIST[currentIndex];
  metaTitle.textContent = video.title;
  metaBadge.textContent = video.category;
  openBtn.href = video.page;

  // render thumbs strip small
  const thumbs = document.getElementById('thumbs');
  if (!thumbs) return;
  thumbs.innerHTML = '';
  PLAYLIST.forEach((v, idx) => {
    const div = document.createElement('div');
    div.className = 'thumb';
    div.innerHTML = `<img src="${v.thumbnail}" alt="${v.title}"><h4>${v.title}</h4>`;
    div.onclick = () => {
      currentIndex = idx;
      if (isPlayerReady) ytPlayer.loadVideoById(v.id);
      renderMeta();
    };
    thumbs.appendChild(div);
  });
}

/* overlay click navigates to video page */
function attachOverlay() {
  const overlay = document.getElementById('clickOverlay');
  overlay.addEventListener('click', () => {
    const page = PLAYLIST[currentIndex].page;
    window.location.href = page;
  });
}

/* init homepage */
function initHome() {
  loadYouTubeAPI(() => {
    createPlayer();
  });

  document.getElementById('nextBtn').addEventListener('click', nextVideo);
  document.getElementById('prevBtn').addEventListener('click', prevVideo);

  // overlay click
  attachOverlay();
}

/* run when DOM ready */
document.addEventListener('DOMContentLoaded', () => {
  // run only if we are on index.html
  if (document.getElementById('player')) {
    initHome();
  }

  // simple menu toggle if present
  const menuBtn = document.getElementById('menuBtn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      document.body.classList.toggle('menu-open');
    });
  }
});
