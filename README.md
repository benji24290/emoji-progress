# emoji-progress

A cli progress-bar with the power of imagination 🌈 ( and emoji's 😻)

## Progress Bar

```javascript
const EmojiBar = require('./index');

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
```

## Loading Bar

```javascript
const ProgressBar = require('emoji-progress');
const bar = new ProgressBar(1, 100, {
  unit: '😻'
});
```

## Config

#### startValue

Defines the value at wich the progress bar starts.
`startValue: 10`
**Default:** 10

#### endValue

Defines the value at wich the progress bar end.
`endValue: 150`
**Default:** 100

#### isLoader

The Emojibar will now be a infiniteloader.
`endValue: true`
**Default:** false

#### hideState

The state (0 of 100 unit) will be hidden.
`hideState: true`
**Default:** false

#### autostart

The bar will start on initialisation.
`autostart: true`
**Default:** false

#### reverse

Sets the direction to right to left.
`reverse: true`
**Default:** false

#### indicator

Sets the indicator.
`indicator: '🤩'`
**Default:** '❤️'

#### unit

Sets the unit (10 of 100 🍌).
`unit: 'Steps'`
**Default:** '🍌'

#### separator

Sets the separator (| 10 of 100).
`separator: '||'`
**Default:** '|'

#### paddingRight

Sets the padding. This can be used if you the loader uses more than one line.
`paddingRight: 10`
**Default:** 5

#### paddingRight

Sets the padding. This can be used if you the loader uses more than one line.
`paddingRight: '||'`
**Default:** '|'

#### fillerLeft

Sets the filler at the left of the indicator.
`fillerLeft: '#'`
**Default:** '-'

#### fillerRight

Sets the filler at the left of the indicator.
`fillerRight: '-'`
**Default:** ' '

#### intervalTime

Sets the interval time. This is the refresh rate of the progress bar and the interval of the loader
`intervalTime: '1000'`
**Default:** 200
