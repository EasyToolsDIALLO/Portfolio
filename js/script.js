const liens = document.querySelectorAll('.nav li a ');
for (var i = 0; i < liens.length; i++) {
  switch (i) {
    case 0:
      liens[0].addEventListener('click', () => {
        liens[0].classList.add('active');
        liens[1].classList.remove('active');
        liens[2].classList.remove('active');
        liens[3].classList.remove('active');
        liens[4].classList.remove('active');
        console.log('click link');
      });

      break;

    case 1:
      liens[1].addEventListener('click', () => {
        liens[1].classList.add('active');
        liens[0].classList.remove('active');
        liens[2].classList.remove('active');
        liens[3].classList.remove('active');
        liens[4].classList.remove('active');
        console.log('click link');
      });

      break;

    case 2:
      liens[2].addEventListener('click', () => {
        liens[2].classList.add('active');
        liens[0].classList.remove('active');
        liens[1].classList.remove('active');
        liens[3].classList.remove('active');
        liens[4].classList.remove('active');
        console.log('click link');
      });

      break;

    case 3:
      liens[3].addEventListener('click', () => {
        liens[3].classList.add('active');
        liens[0].classList.remove('active');
        liens[1].classList.remove('active');
        liens[2].classList.remove('active');
        liens[4].classList.remove('active');
        console.log('click link');
      });

      break;

    case 4:
      liens[4].addEventListener('click', () => {
        liens[4].classList.add('active');
        liens[0].classList.remove('active');
        liens[1].classList.remove('active');
        liens[2].classList.remove('active');
        liens[3].classList.remove('active');
        console.log('click link');
      });

      break;
  }
}
/*liens.forEach(lien=>{
    lien.addEventListener("click",()=>{
        lien.classList.toggle("active")
        console.log("click link")
    })
})
*/

var typed = new Typed('.typing', {
  strings: ['web developper', 'mobile developper', 'data scientist'],
  typeSpeed: 100,
  BackSpeed: 40,
  loop: true,
});
