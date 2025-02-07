function changeVideo(videoId, title) {
    document.getElementById("main-video").src = `https://www.youtube.com/embed/${videoId}`;
    document.getElementById("video-title").innerText = title;
}
