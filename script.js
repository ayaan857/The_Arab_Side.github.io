// Load video list
async function loadVideos() {
    const response = await fetch("videos.json");
    const data = await response.json();
    return data.videos;
}

// Read URL parameters
function getVideoID() {
    const params = new URLSearchParams(window.location.search);
    return params.get("vid");
}

// Load video page content
async function loadVideoPage() {
    const videoID = getVideoID();
    if (!videoID) return;

    const videos = await loadVideos();
    const vid = videos.find(v => v.id === videoID);

    if (!vid) return;

    // Load video iframe
    document.getElementById("videoFrame").src =
        `https://www.youtube.com/embed/${vid.id}`;

    // Load title and description
    document.getElementById("videoTitle").innerText = vid.title;
    document.getElementById("videoDescription").innerText = vid.description;
}

// If we are on video page, load the video
if (window.location.pathname.includes("video.html")) {
    loadVideoPage();
}
