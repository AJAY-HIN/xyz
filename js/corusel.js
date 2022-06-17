const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let direction;

next.addEventListener('click', function() {
  direction = -1;
  carousel.style.justifyContent = 'center';
  slider.style.transform = 'translate(-12.38%)';  
});


prev.addEventListener('click', function() {

  direction = 1;
  carousel.style.justifyContent = 'center';    
  slider.style.transform = 'translate(12.38%)';  
  
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
    slider.style.transition = 'ease 0.6s';
  })
});



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
  // console.log(image.data);
  image.data.map(imgs => {
    let apiImages = `
    <div style="poistion:relative; text-align:center; ">
    <div class="carImage" style=" background-image:url(${imgs.backgroundImage});"> <h1>Flat 20% off</h1></div>
    </div>
    
    
    `;

    html += apiImages;
  });

  let slider = document.querySelector('.slider');
  slider.innerHTML = html;
}

renderImage();