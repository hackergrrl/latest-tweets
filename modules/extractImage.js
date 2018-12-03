const xpath = require('xpath');
const getLinks = require('./extractLinkFromText');

module.exports = ( tweet ) => {
    var imageContainer = xpath.select('.//div[contains(@class, \'js-adaptive-photo\')]/@data-image-url', tweet)[0]
    var img = imageContainer?imageContainer.value:null;

    if(!img) {
        let poster = xpath.select('.//video/@poster', tweet)[0]
        img = poster?poster.value:null;
    }

    if(!img) {
        let mediaStyles = xpath.select('.//div[contains(@style,\'pbs.twimg.com\')]/@style', tweet)[0]
        let style = mediaStyles?mediaStyles.value:null;
        if(style) {
            let links = getLinks( style )
            img = links && links.length>0?links[0]:null;
        }
    }

    return img;
}