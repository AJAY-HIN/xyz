const getData = async ()=>{
    let response = await fetch(`http://training.panorbitprojects.com/api/RestaurantsList/?page=1`);
    let data = await response.json();
    let user = await data;
    let html = '';
    console.log(user.data.count);
    
        let newhtml = `
          <h1> ${user.data.count} restaurants</h1>
        `;
        html += newhtml;
    
    document.querySelector(".counts").insertAdjacentHTML('beforebegin', html)
}
getData();
