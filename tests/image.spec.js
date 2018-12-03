const expect = require("chai").expect;
const getImage = require("../modules/extractImage.js");
const dom = require('xmldom').DOMParser
const xpath = require('xpath')
const fs = require('fs')

// Too easy to extract into module
const groupBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i]);
    return acc;
  }, {});


describe("Get images", function () {

  var body = fs.readFileSync(`${__dirname}/fixtures/media.html`, 'utf8')
  var doc = new dom({ errorHandler: function () { } }).parseFromString(body)
  var tweets = []

  before(function () {
    tweets = xpath.select('//li[contains(@class, \'js-stream-item\')]', doc)
    // runs before all tests in this block
  });

  it("Tweet PIC", function () {
    let images = tweets.map( (tw, n) => {
      let tweet = xpath.select('./div[contains(@class, \'tweet\')]/div[contains(@class, \'content\')]', tw)[0]
      return getImage(tweet); 
    })
    let groups = groupBy( images, (item)=> `${item}` );

    expect(groups.null.length).to.equal(2);
    expect(groups['https://pbs.twimg.com/amplify_video_thumb/1069449497141334016/img/xt3rYD3HArtNiWPq.jpg'].length).to.equal(1);
    expect(groups['https://pbs.twimg.com/media/DtdVMdUUcAAyZtb.jpg'].length).to.equal(1);
  });
});