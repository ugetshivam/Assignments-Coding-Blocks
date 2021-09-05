const container = document.getElementById('container');
const cityName =  document.getElementById('cityName');
const temp =  document.getElementById('Temperature');
const desc =  document.getElementById('Description');
const icon =  document.getElementById('icon');
const dttime = document.getElementById('dt-time');


var date = new Date();

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