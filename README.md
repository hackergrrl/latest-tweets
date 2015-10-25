# latest-tweets

> get a JSON array of a Twitter user's latest tweets -- no Twitter API required!


## installation

```sh
$ npm i latest-tweets
```

## usage

```js
var latestTweets = require('latest-tweets')

latestTweets('noffle', function (err, tweets) {
  console.log(tweets)
})
```


## api

```js
var latestTweets = require('latest-tweets')
```

### latestTweets(username, cb(err, tweets))

Specify a `username` of the timeline you want. The callback `cb` will contain an
optional error as its first parameter, and an array with the user's latest
tweets as its second parameter.


## license

MIT

