

// background colors
const now = new Date();
var hours = now.getHours();
if (5 <= hours && hours < 8) {//Morning
    document.write('<body style="background: #F3904F; background: -webkit-linear-gradient(to right, #3B4371, #F3904F); background: linear-gradient(to right, #3B4371, #F3904F);">');
    var type = "Morning";
}
if (8 <= hours && hours < 17) {//Day
     document.write('<body style="background: #00B4DB; background: -webkit-linear-gradient(to right, #0083B0, #00B4DB); background: linear-gradient(to right, #0083B0, #00B4DB);">');
    var type = "Daytime";
}
if (17 <= hours && hours < 19) {//Evening
    document.write('<body style="background: #355C7D; background: -webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D); background: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);\n color: white">');
    var type = "Evening";
}
if (19 <= hours && hours < 5) {//Night
    document.write('<body style="background: #0f2027; background: -webkit-linear-gradient(to right, #0f2027, #203a43, #2c5364);  background: linear-gradient(to right, #0f2027, #203a43, #2c5364); color : white">');
    var type = "Nighttime";
}
   //CSS gradient backgrounds from https://uigradients.com

//button
var searchBtn = document.getElementById("search-btn");


 searchBtn.onclick = function() {
     GetCity();
     GetInfo()
  }

  function GetCity () {
    var inputCity = document.getElementById("userinput");
    var City = inputCity.value;
      console.log(City);
  }

// API KEY = 0daa911f9cdb0a0ae86937c70bc9de6a

// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}


function GetInfo() {
    const displayCityName = document.getElementById("displayCityName");
    var inputCity = document.getElementById("userinput");
    var City = inputCity.value;
    displayCityName.innerHTML = City


fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${City}&appid=0daa911f9cdb0a0ae86937c70bc9de6a`)
.then(response => response.json())
.then(data => {
    for(i=0;i<6;i++){
        document.getElementById("day" +(i+1)+"Temp").innerHTML ="Temp:" + Number((data.list[i].main.temp -273.15) *9/5 +32).toFixed(1)+"°F";
    }
    for(i=0;i<6;i++){
        document.getElementById("day" +(i+1)+"Wind").innerHTML ="Wind:" + Number(data.list[i].wind.speed / 1.609).toFixed(1)+"MPH";
    }
    for(i=0;i<6;i++){
        document.getElementById("day" +(i+1)+"Humidity").innerHTML ="Humidity:" + Number(data.list[i].main.humidity)+"%";
    }
    for(i=0;i<6;i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
    }
})
.catch(err => alert("something went wrong"))
}


function DefaultScreen(){
    document.getElementById("userinput").defaultValue ="Charlotte";
    GetInfo();
}

//display correct days of 5 day forecast
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function CheckDay(day) {
    if(day +now.getDay() > 6){
        return day +now.getDay()-7;
    }
    else{
        return day +now.getDay();
    }
}

for(i=0;i<6;i++){
    document.getElementById("day"+(i+1)).innerHTML = weekday[CheckDay(i)];
}

//celsius to fahrenheit formula
//(0°C × 9/5) + 32 