const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

// interval to run every 30seconds

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  console.log(load);
}
