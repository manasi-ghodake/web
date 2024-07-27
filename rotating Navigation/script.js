const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('container')

open.addEventlisner('click', () => container.classList.add('show-nav'))
close.addEventlisner('click', () => container.classList.remove('show-nav'))
