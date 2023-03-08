let tagSet = {
  page3 : "section",
  projContainer : "div",
  picture : "img",
  projDiscription : "div",
  projTitle : "h2",
  projExplain : "h3"
}
function tagMaker(tagObj) {
  const elements = {};
  for(let tag in tagObj) {
    elements[tag] = document.createElement(tagObj[tag]);
  }
  return elements;
}
const page3Tag = tagMaker(tagSet);
console.log(page3Tag);

tagMaker.call

page3Tag.projTitle.textContetnt = '포켓몬 도감'
page3Tag.projExplain.textContetnt = 'API를 이용해서 만드는 포켓몬 도감'
tagSet.background = 'red'
