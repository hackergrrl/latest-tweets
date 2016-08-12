# latest-tweets

> get a JSON array of a Twitter user's latest tweets -- no Twitter API required!

## background

Based on the [Perl implementation](http://perlmonks.org/?node_id=1039382) by
[ciderpunx](http://perlmonks.org/?node_id=373188).

This was written to be used in Node, but it embeds a CORS proxy url so you can
use it without any configuration in the browser using e.g.
[browserify](https://github.com/substack/node-browserify).

## usage

```js
var latestTweets = require('latest-tweets')

latestTweets('noffle', function (err, tweets) {
  console.log(tweets)
})
```

This will output an array of objects:

```js
[ { url: 'https://twitter.com/noffle/status/700514938750521344',
    content: 'We worry about what others think of us when we don\'t know what we think of ourselves.',
    date: 'Fri Feb 19 2016 02:59:10 GMT+0100 (CET)' },
    username: '@noffle',
    fullname: 'Stephen Whitmore'
  { url: 'https://twitter.com/noffle/status/727096493543317504',
    content: 'API tokens are awful and don\'t let anybody tell you otherwise.',
    date: 'Mon May 02 2016 11:24:47 GMT+0200 (CEST)' },
    username: '@noffle',
    fullname: 'Stephen Whitmore'
  ...
```

## api

```js
var latestTweets = require('latest-tweets')
```

### latestTweets(username, cb(err, tweets))

Specify a `username` of the timeline you want. The callback `cb` will contain an
optional error as its first parameter, and an array with the user's latest
tweets as its second parameter.

## installation

```sh
$ npm i latest-tweets
```

## ever-shifting ground

Scraping HTML is a foundation upon ever-shifting ground. As Twitter changes
[what is essentially an unofficial API], things will break. If you notice that
`latest-tweets` isn't working, please file an issue. Better yet, file a fixing
pull request.

## license

MIT

