// const getData = async ()=>{
//     let response = await fetch(`http://training.panorbitprojects.com/api/RestaurantsList/?page=1`);
//     let data = await response.json();
//     let user = await data;
//     let html = '';
//     console.log(user.data.count);
    
//         let newhtml = `
//           <h1 class="h1Counts"> ${user.data.count} restaurants</h1>
//         `;
//         html += newhtml;
    
//     document.querySelector(".counts").insertAdjacentHTML('beforebegin', html)
// }
// getData();





// window.onscroll = function(){shaddowVisible()};

function shaddowVisible(){
  if(document.querySelector('.scrollmenu').offsetTop <= window.scrollY ){
    document.querySelector('.secNavSearch').style.visibility = 'visible';
    document.querySelector('.scrollmenu').style.zIndex = "2";
    document.querySelector('.scrollmenu').style.transition = 'ease 0.7s';
  }else{
    document.querySelector('.secNavSearch').style.visibility = 'hidden';
    document.querySelector('.scrollmenu').style.zIndex = "0";

  }
}

