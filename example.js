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

/*
const progress = new EmojiBar({
  start: 10,
  end: 100,
  unit: '😍',
  fillerLeft: '-',
  indicator: '😜hallo😄'
});
progress.start();
setTimeout(() => {
  progress.increase(40);
  setTimeout(() => {
    progress.increase(70);
  }, 3000);
}, 3000);
*/

const loader = new EmojiBar({
  hideState: true,
  indicator: '🐈',
  reverse: true,
  fillerLeft: '🌈',
  isLoader: true,
  autostart: true,
  intervalTime: 100,
});

