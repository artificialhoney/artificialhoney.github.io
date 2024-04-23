const footerEl = document.querySelector('.hm-copyright');

if (!footerEl) {
  throw '';
}

const year = 2024;
const footer = (y) => `<span>${y} © <a href="https://honeymachine.io" class="home-link">HONEYMACHINE</a>. DIY.</span>`
const signature = document.createElement('div')
signature.innerHTML = footer(year).trim();
footerEl.appendChild(signature.firstChild)
