const content = document.querySelector('.content'),
	musicTitle = content.querySelector('.music-titles .title'),
	musicArtist = content.querySelector('.music-titles .artist'),
	musicFriend = content.querySelector('.music-titles .friend');

let index = 9;

window.addEventListener('onload', () => {
	loadData(index);
});

function loadData(indexValue) {
	musicTitle.innerHTML = songs[indexValue - 1].title;
	musicArtist.innerHTML = songs[indexValue - 1].artist;
	musicFriend.innerHTML = songs[indexValue - 1].friend;
}
