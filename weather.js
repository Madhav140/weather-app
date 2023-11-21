
function Search(){
    if(input.value){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=b29187a2dbbc7682af06b07de5e1cab8`).then((response)=>{if(response.ok){response.json().then((item)=>{

    let temp = item.main.temp
    let cel = eval(temp - 273.15)
    let cel1 = cel.toFixed(1)

    let feel = item.main.feels_like
    let feel1 = eval(feel-273.15)
    let feel2 = feel1.toFixed(1)

    let desc = item.weather[0].description

     
    let Main =item.weather[0].main
    var vidsrc = document.getElementById("back")
    if(Main == 'Mist'){
      var src ="./images/mist.png"
      vidsrc.src ="./videos/Mist.mp4"
    }
    else if(Main == 'Clouds'){
        var src = "./images/clouds.png"
        vidsrc.src = "./videos/clouds.mp4"
    }
    else if(Main == 'Clear'){
        var src = "./images/clear.png"
        vidsrc.src = "./videos/clear.mp4"
    }
    else if(Main == 'Rain'){
        var src = "./images/rain.png"
        vidsrc.src = "./videos/Rain.mp4"
    }
    else if(Main == 'Drizzle'){
        var src = "./images/drizzle.png"
        vidsrc.src = "./videos/drizzle.mp4"
    }
    else if(Main == 'Snow'){
        var src = "./images/snow.png"
        vidsrc.src = "./videos/snow.mp4"
    }
    else if(Main == 'Smoke'){
        var src = "./images/smoke.png"
        vidsrc.src = "./videos/Smoke.mp4"
    }
    else if(Main == 'Haze'){
        var src = "./images/Haze.png"
        vidsrc.src = "./videos/Haze.mp4"
    }
    


    content.innerHTML =` <div class="col-4">
    <h1 class="temp">${cel1}&#176;C</h1>
    <p class="mb-4 fs-4">Feels like ${feel2}&#176;C</p>
</div>
<div class="col-6">
    <div class="row mt-5">
        <h1 class="name">${item.name}</h1>
    </div>
    <div class="row" id="timedate">
         
    </div>
</div>
<div class="col-2 iconrow">
    <div class="row mt-2">
    <img  id="icon" src=${src} >  
    </div>
    <div class="row">
        <p class="fs-4">${desc}</p>
    </div>
    
</div>`

   content1.innerHTML = `<div class="search">
   <input type="text" placeholder="enter city name" id="input">  
   <button  onclick="Search()" ><img src="./images/Search icon.png"></button>
   <button><img id="refresh" src="./images/Refesh button.png" alt=""></button>
</div>    
<div class="details">
   <h2 class="mt-4">Weather Details</h2>
        <div class="country">
           <div id="country1" class="hstack gap-3">
               <div class="p-2">Country :</div>
               <div class="p-2">${item.sys.country}</div>
             </div>
        </div> 
        <div class="col mt-3">
         <img src="./images/humidity.png">
         <div class="detail1">
           <p class="humidity">${item.main.humidity}%</p>
           <p >Humidity</p>
         </div>   
    </div>
    <div class="col mt-3">
       <img src="./images/wind.png">
       <div class="detail1">
         <p class="wind">${item.wind.speed} km/h</p>
         <p>Wind Speed</p>
       </div>   
  </div>
  <div class="col mt-3">
   <img class="mb-2" src="./images/Pressure.png">
   <div class="detail1">
     <p class="Pressure">${item.main.pressure}</p>
     <p>Pressure</p>
   </div>   
</div>

</div>` 

  

});
    }else{
        alert('City not found')
    }

}).catch(()=>alert('city not found'));

}
else{
    alert('Please enter a city name')
} 
}

/* for time */
function gettime(){
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const time = new Date()

    let hour = time.getHours()
    let min = time.getMinutes()
    let day = daysOfWeek[time.getDay()]
    let date = time.getDate()
    let month = time.getMonth()
    let year = time.getFullYear()

    timedate.innerHTML = `<p class="fs-5" >${hour} : ${min} ${hour>=12?'PM':'AM'} - ${day} ${date}-${month}-${year} </p>`
    setTimeout(()=>{gettime()},0)
    }
    gettime()
 /* time end */   


 
 function refresh(){
   window.location.reload()
 }

 

