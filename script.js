const slider = document.getElementById('slide_mother');/*kima tab mt3 les photos*/ 
const slides = document.querySelectorAll('.slide');/*nodelist ll .slide w l mother container mt3hom */
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
let autoSlideTimer;
const DELAY = 4000;

function goToSlide(index) {
  // Wrap around cleanly at both ends
  if (index >= slides.length) {
    currentIndex = 0;/*keen tfout max taile t3 tab slider twali trj3 l awlou */
  } else if (index < 0) {
    currentIndex = slides.length - 1;/*ken twali a9al ml min tail tarja3 l e5rou */
  } else {
    currentIndex = index;/*snn jwha behi w tkamel ll slide li b3dha */
  }

  // Scroll horizontally to the target slide's left position
  slider.scrollTo({
    left: slides[currentIndex].offsetLeft,
    behavior: 'smooth' /* */
  });
}


function resetTimer() {
  clearInterval(autoSlideTimer); /*ken fama a timer deja, traj3ou ll 0 (mithel ken timer fl 3.8s ki t3awed tnzel 3l btn bch yo93d fama 0.2s w ki youfa l timer yt3ada ll slide li b3da f 0.2s) */
  autoSlideTimer = setInterval(() => {
    goToSlide(currentIndex + 1);
  }, DELAY);
}

// 1. On-screen button clicks
nextBtn.addEventListener('click', () => {
  goToSlide(currentIndex + 1);
  resetTimer();
});

prevBtn.addEventListener('click', () => {
  goToSlide(currentIndex - 1);
  resetTimer();
});

// 2. Keyboard arrow presses (or Spacebar for next)
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    goToSlide(currentIndex + 1);
    resetTimer();
  } else if (e.key === 'ArrowLeft') {
    goToSlide(currentIndex - 1);
    resetTimer();
  }
});

// 3. Keep currentIndex synced if the user swipes manually on touchscreens/trackpads
//ll tablet and mobile wla touchscreen in general
slider.addEventListener('scrollend', () => {
  currentIndex = Math.round(slider.scrollLeft / window.innerWidth);
  resetTimer();
});

// Kick off the 4-second auto-slide when the page loads
resetTimer();

function move(){
  document.getElementById("ifr").style.left=0
}
function apear(){
  document.getElementById("blurer").classList.remove('hide')
}
function moveback(){
  document.getElementById("ifr").style.left=-999+"%"
  document.getElementById("blurer").classList.add('hide')
}
