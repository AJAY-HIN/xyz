// import '../css/card.css';

let outWrapper = document.querySelector('.outWrapper');
let  i = 1;
let loadMore = function(){
    for(let i=1; i<=(50/10); i++){
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
                      <h2>${ele.name}</h2>
                      <p>${ele.items}</p>
                      <div class="rating">
                      <button><i class="fa fa-star"></i>${ele.rating}</button>
                      <samp>.${ele.deliveryTime}</samp>
                      <samp>.${ele.costForTwo}</samp>
                      </div>
                    </div>
                </div>
                <div  class="disccount">
                  <h3><i class="fa-solid fa-badge-percent"></i>${ele.offer}</h3>
                </div>
                </div>
                <div class="quickView">
                  <h3>Quick view</h2>
                </div>
              </div> 
              </div>           
                `;
                html += newhtml;
            })
            document.querySelector(".outWrapper").insertAdjacentHTML('beforebegin', html)
        }
        getData();
    }
  }

  outWrapper.addEventListener('scroll', function(){
      if(cardWrapper.scrollTop + cardWrapper.clientHeight  >= cardWrapper.scrollHeight) {
        loadMore();
      }
    });

    loadMore();




console.log('ajhfiugdsfbjgkisdgfsee')