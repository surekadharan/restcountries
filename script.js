var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);




var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));

function foo(data1)
{
    for(var i=0;i<data1.length;i++)
    {
      row.innerHTML+=`<div class="col-ms-4">
      <div class="card card-header card-body" style="width: 18rem;">
      <h4 style="background-color:grey">${data1[i].name}</h4>
  <img src="${data1[i].flag}" class="card-img-top" alt="country flag">
  <div class="card-body">
    
     capital :${data1[i].capital}<br>
     region :${data1[i].region}<br>
    
    <button type="button" class="btn btn-primary">click for weather</button>
  </div>
</div>
      </div>`
    }
document.body.append(container);
}
async function getdata(){
  var res=await fetch("https://restcountries.com/v2/all");
  var res1= await res.json();

  for(var i=0;i<res1.length;i++){
      try {
          // console.log(`Latitude:${res1[i].latlng[0]} Longitude:${res1[i].latlng[1]}`);
          weatherdata(res1[i].latlng[0],res1[i].latlng[1]);
      } 
 catch (error) {
  console.log(error);
}
}
}

async function weatherdata(lat,lon){
try {
  if(lon===undefined) throw new Error("Invalid Coordinates");
  console.log(lat,lon);
  let res2=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fa4973b1fa1ca717811b9566c55321ec`);
  let res3=await res2.json();
  console.log(`${res3.main.temp}`);
} catch (error) {
 console.log(error) 
}

}

getdata();