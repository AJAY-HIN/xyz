// import '../css/card.css';

let outWrapper = document.querySelector('.outWrapper');
let  i = 1;
        const getData = async ()=>{
            let response = await fetch(`http://training.panorbitprojects.com/api/RestaurantsList/?page=${i}`);
            let data = await response.json();
            let user = await data;
            let html = '';
            // console.log(user.data.restaurants);
            user.data.restaurants.map((ele) =>{
                let newhtml = `
                <div class="outWrapper">
                <div class="cardWrapper">
                <div class="shaddowBorder">
                  <div class="card">
                    <img src="${ele.image}" alt="foodimage">
                    <div class="details">
                      <h3>${ele.name}</h3>
                      <p>${ele.items}</p>
                      <div class="rating">
                      <button><i class="fa fa-star"></i> ${ele.rating}</button>
                      <p><span>. </span>${ele.deliveryTime}</p>
                      <p><span>. </span>${ele.costForTwo}</p>
                      </div>
                    </div>
                </div>
                <div  class="disccount">
                  <h3><i class="fa-solid fa-badge-percent"></i>${ele.offer}</h3>
                </div>
                </div>
                <hr/>
                <div class="quickView">
                  <h4>Quick view</h2>
                </div>
              </div> 
              </div>           
                `;
                html += newhtml;
            })
            document.querySelector(".outWrapper").innerHTML += html;
          
        }
        getData();





  window.addEventListener('scroll', function(){

      if((window.scrollY + window.innerHeight ) + 10 >=  document.documentElement.scrollHeight ) {
        ++i;
        setTimeout(getData(),2000);
        

      }
    });





