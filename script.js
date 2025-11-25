function getQueryParam(name){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

async function loadVideos(){
    const res = await fetch('videos.json');
    const data = await res.json();
    return data.videos;
}

async function populateHomePage(){
    const videos = await loadVideos();
    const grid = document.querySelector('.video-grid');
    if(!grid) return;
    grid.innerHTML='';
    videos.forEach(v=>{
        const card = document.createElement('div');
        card.className='video-card';
        card.innerHTML=`<a href="video.html?vid=${v.id}">
        <img src="${v.thumbnail}" alt="${v.title}">
        <h3>${v.title}</h3></a>`;
        grid.appendChild(card);
    });
}

async function populateCategoryPage(){
    const cat = getQueryParam('cat');
    const videos = await loadVideos();
    const catVideos = videos.filter(v=>v.category===cat);
    const grid = document.querySelector('.video-grid');
    const featured = document.querySelector('.featured-video iframe');
    if(!grid||!featured) return;
    if(catVideos.length>0) featured.src=`https://www.youtube.com/embed/${catVideos[0].id}`;
    grid.innerHTML='';
    catVideos.forEach(v=>{
        const card=document.createElement('div');
        card.className='video-card';
        card.innerHTML=`<a href="video.html?vid=${v.id}">
        <img src="${v.thumbnail}" alt="${v.title}">
        <h3>${v.title}</h3></a>`;
        grid.appendChild(card);
    });
}

async function populateVideoPage(){
    const vid=getQueryParam('vid');
    const videos = await loadVideos();
    const video = videos.find(v=>v.id===vid);
    if(!video) return;
    const player=document.getElementById('videoPlayer');
    const title=document.querySelector('.video-description h2');
    const desc=document.querySelector('.video-description p');
    if(player) player.src=`https://www.youtube.com/embed/${video.id}`;
    if(title) title.textContent=video.title;
    if(desc) desc.textContent=video.description;
}

document.addEventListener('DOMContentLoaded',()=>{
    if(document.body.classList.contains('home')) populateHomePage();
    else if(document.body.classList.contains('category')) populateCategoryPage();
    else if(document.body.classList.contains('video')) populateVideoPage();
});
