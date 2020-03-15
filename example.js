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

//SIMPLE

const progress = new EmojiBar({
  start: 10,
  end: 100,
  unit: '😍',
  paddingRight: 1,
  fillerLeft: '-',
  indicator: '😜->'
});
progress.start();
setTimeout(() => {
  progress.increase(40);
  setTimeout(() => {
    progress.increase(70);
  }, 3000);
}, 3000);


//NYAN
/*
const loader = new EmojiBar({
  hideState: true,
  indicator: '🐈',
  reverse: true,
  fillerLeft: '🌈',
  isLoader: true,
  autostart: true,
  intervalTime: 100,
});
*/


//BANANA
/*
const progress = new EmojiBar({
  start: 10,
  end: 100,
  unit: '🍌',
  fillerRight: '🍌   ',
  fillerLeft: ' ',
  indicator: '🦍  🐅',
  isLoader: true,
  autostart: true,
  reverse: true
});
progress.start();
setTimeout(() => {
  progress.increase(40);
  setTimeout(() => {
    progress.increase(70);
  }, 10000);
}, 3000);
*/