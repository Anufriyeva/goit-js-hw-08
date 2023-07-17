import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

function saveCurrentTime() {
  player.getCurrentTime().then((currentTime) => {
    localStorage.setItem('videoplayer-current-time', currentTime);
  });
}

const throttledSaveCurrentTime = throttle(saveCurrentTime, 1000);

player.on('timeupdate', throttledSaveCurrentTime);

window.addEventListener('load', () => {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(parseFloat(currentTime));
  }
});
