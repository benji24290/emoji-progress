const EmojiBar = require('./index');

/*
const loader = new EmojiBar({
  hideState: true,
  isLoader: true,
  autostart: true
});
setTimeout(() => {
  loader.complete();
}, 3000);
*/

const progress = new EmojiBar({
  start: 10,
  end: 100,
  unit: '😍'
});
progress.start();
setTimeout(() => {
  progress.increase(40);
  setTimeout(() => {
    progress.increase(70);
  }, 3000);
}, 3000);
