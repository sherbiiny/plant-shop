let flashs = document.querySelectorAll('.flash');

setTimeout(() => {
  flashs.forEach(f => f.classList.add('opacity-0'));
}, 3000)