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

// function shaddowVisible(){
//   // let sTop = window.screenTop;
//   if(document.querySelector('.scrollmenu').style.scrollTop = '10px' ){
//     document.querySelector('.secNavSearch').style.visibility = 'visible';
//   }else{
//     document.querySelector('.secNavSearch').style.visibility = 'hidden';
//   }
// }
