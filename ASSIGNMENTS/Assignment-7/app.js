const container = document.getElementById('container');
const cityName =  document.getElementById('cityName');
const temp =  document.getElementById('Temperature');
const desc =  document.getElementById('Description');
const icon =  document.getElementById('icon');
const dttime = document.getElementById('dt-time');


var date = new Date();
function backgroundChange(weather) {
    var imageUrl = "https://www.onhisowntrip.com/wp-content/uploads/2021/04/z4.jpg";
    if(weather === 'mist'){
        imageUrl= "https://images.unsplash.com/photo-1487621167305-5d248087c724?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWlzdHklMjBmb3Jlc3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
        
    }
    else if(weather.includes('clear')){
        imageUrl = "https://images.unsplash.com/photo-1546440730-4716c1a47815?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=719&q=80";
    }
    else if(weather === 'haze'){
        imageUrl= "https://images.unsplash.com/photo-1594492215832-a299f28a00c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
    }
    else if(weather.includes('rain')){
        imageUrl = "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
    }
    else if(weather.includes('cloud')){
        imageUrl = "https://images.unsplash.com/photo-1517828787276-cf8cb82c87ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80";
    }
    else if(weather.includes('storm')){
        imageUrl = "https://images.unsplash.com/photo-1488812690953-601000f207e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=767&q=80";
    }
    else if(weather.includes('snow')){
        imageUrl = "https://images.unsplash.com/photo-1595391595208-204a890b02e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
    }
    $('#container').css("background-image", "url(" + imageUrl + ")");
        $('#container').css("background-repeat", "no-repeat");
        $('#container').css("background-size", "cover");
  }
fetch('https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=7c2a64da9f45a1423043dde66bd600dd')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    var time = date.getHours() + ":" + date.getMinutes();
    dttime.innerHTML = time;
    cityName.innerHTML = data.name;
    var f = (data.main.temp * (9/5)) + 32;
    temp.innerHTML = data.main.temp + "&#8451;" + "&nbsp;&nbsp;"+ f.toPrecision(4) + "&deg;F";
    desc.innerHTML = data.weather[0].description;
    icon.src= "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    backgroundChange(data.weather[0].description);
})
.catch((err)=>{
    console.log(err.message);
})


const btn = document.getElementById('btn');
const inp = document.getElementById('inp');
btn.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&units=metric&appid=7c2a64da9f45a1423043dde66bd600dd`)
.then((res)=>{
    return res.json();
})
.then((data)=>{
    // container.innerHTML += `<p>${data.main.temp}</p>`
    if(data.name !== undefined){
    var time = date.getHours() + ":" + date.getMinutes();
dttime.innerHTML = time;
    cityName.innerHTML = data.name;
    var f = (data.main.temp * (9/5)) + 32;
    temp.innerHTML = data.main.temp + "&#8451;" + "&nbsp;&nbsp;" + f.toPrecision(4) + "&deg;F";
    desc.innerHTML = data.weather[0].description;
    icon.src= "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    }
    else{
        var time = date.getHours() + ":" + date.getMinutes();
dttime.innerHTML = time;
        cityName.innerText = "NO SUCH PLACE";
        temp.innerText = "";
        desc.innerText = "";
        icon.src= "";
    }
    inp.value = "";
    backgroundChange(data.weather[0].description);
})
.catch((err)=>{
    console.log(err.message);
})
})

inp.addEventListener('keypress', function(e){
    if (e.which === 13) {
        btn.click();
    }
})