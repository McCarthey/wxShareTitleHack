export function wxShareHack(newTitle) {
  //用新闻news-title替换title
  let ua = window.navigator.userAgent.toLowerCase();
  //微信浏览器
  if (ua.indexOf('micromessenger')!== -1) {    
    console.log('true')
    let title = document.getElementsByTagName('title')[0];
    title.innerHTML = newTitle;
  }
}