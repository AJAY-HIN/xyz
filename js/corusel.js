const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let direction;

next.addEventListener('click', function() {
  direction = -1;
  carousel.style.justifyContent = 'center';
  slider.style.transform = 'translate(-12%)';  
});

prev.addEventListener('click', function() {
  if (direction !== -1) {
    direction = 1;
    slider.appendChild(slider.lastElementChild);
  }
  carousel.style.justifyContent = 'center';    
  slider.style.transform = 'translate(12%)';  
  
});

slider.addEventListener('transitionend', function() {
  // get the last element and append it to the front
  
  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  } else {
    slider.appendChild(slider.firstElementChild);
  }
  
  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';
  setTimeout(() => {
    slider.style.transition = 'all 0.3s';
  })
}, false);



const getCarousalData = async ()=>{
  try{
  let response = await fetch('http://training.panorbitprojects.com/api/GetCarousalData/')
  return await response.json();
} catch (error) {
  console.log(error);
}
}

const renderImage = async () => {
  let image = await getCarousalData();
  let html = "";
  console.log(image.data);
  image.data.map(imgs => {
    let apiImages = `<img src="${imgs.backgroundImage}" >`;

    html += apiImages;
  });

  let slider = document.querySelector('.slider');
  slider.innerHTML = html;
}

renderImage();