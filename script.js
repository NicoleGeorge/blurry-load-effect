const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

// interval to run every 30seconds

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }
//   console.log(load); - working

loadText.innerHTML = `${load}%`

// Stack Overflow code snippet - linked below
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

loadText.style.opacity = scale(load, 0, 100, 1, 0)

}


const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
