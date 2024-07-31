async function show(){
    let data =await fetch('http://localhost:3000/items');
    let response = await data.json();
    document.getElementById('showitems').innerHTML=response.map(e =>`
    <div id="maindiv">
    <img id="imagepic" src="${e.img}" alt="">
    <div style="display:flex ; justify-content:space-between ;">
    
    <div>
    <div id="offer">${e.offer}</div>
    <div>${e.b_name}</div>
    <div>${e.address}</div>
    </div>
    
    <div>
    <div id="rating">${e.rating}</div>
    <div>${e.price}</div>
    <div>${e.d_time}</div>
    </div>
    
    </div>
    </div>`).join("")
     let data1= await fetch(' http://localhost:3000/circleimages');
     let response1= await data1.json();
     document.getElementById('showcircles').innerHTML=response1.map(e =>`
     <img src="${e.images}" style="border-radious:50%;width:100px;margin:30px">`).join("")
   
}
function agra(){
    window.open('./mainpage.html')
}
function Mumbai(){
    window.open('./clone.html')
}
function Mumbai(){
    window.open('./bhopal.html')
}