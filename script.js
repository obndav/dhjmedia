let likeStatus = false;

function toggleLike(icon) {
    likeStatus = !likeStatus;
    icon.innerHTML = likeStatus ? 'favorite' : 'favorite_border';
    icon.style.color = likeStatus ? '#ff0000' : '#fff';
}

function repostAnimation(icon) {
    // Implement your repost animation logic here
    console.log('Repost animation triggered!');
}

function showComments() {
    // Implement your show comments logic here
    console.log('Show comments functionality to be added.');
}
