const footerEl = document.querySelector('.hm-copyright');

if (!footerEl) {
  throw '';
}

const year = 2024;
const footer = (y) => `<span>${y} © <a href="https://hi.honeymachine.io" class="home-link" target="_blank">HONEYMACHINE</a>. DIY.</span>`
const signature = document.createElement('div')
signature.innerHTML = footer(year).trim();
footerEl.appendChild(signature.firstChild)

var _paq = window._paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(["disableCookies"]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="//honest.honeymachine.io/";
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  _paq.push(['setSiteId', '3']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();
