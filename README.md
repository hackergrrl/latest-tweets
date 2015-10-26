# latest-tweets

> get a JSON array of a Twitter user's latest tweets -- no Twitter API required!


## background

Based on the [Perl implementation](http://perlmonks.org/?node_id=1039382) by
[ciderpunx](http://perlmonks.org/?node_id=373188).


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

