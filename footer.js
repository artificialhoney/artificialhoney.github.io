const footerEl = document.querySelector('.site-footer');

if (!footerEl) {
  throw '';
}

const year = 2023;
const footer = (y) => `<span>${y} © <a href="https://honeymachine.io" class="home-link">Honeymachine</a>. Created with 🌶.</span>`
const signature = document.createElement('div')
signature.innerHTML = footer(year).trim();
footerEl.appendChild(signature.firstChild)
