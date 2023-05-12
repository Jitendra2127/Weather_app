const cityName = document.getElementById("cityName");
const city_name = document.getElementsByClassName("city_name")[0];
const temperature=document.getElementsByClassName("temperature")[0];
const temperature_status=document.getElementsByClassName("temperature_status")[0];
const temperature_status_photo=document.getElementsByClassName("temperature_status_photo")[0];
const celsius=document.getElementsByClassName("Celsius")[0];

const submitBtn = document.getElementById("submitBtn");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerText = "Please write the name of the city before search";
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=c5538a8a2b3be3f19fe6dd83d1720448`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
    
      city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
      
      temperature.innerText=`${arrData[0].main.temp}`;
      temperature_status.innerText=arrData[0].weather[0].main;
     
      celsius.style.display="block";

      const tempmmod=arrData[0].weather[0].main;
      if(tempmmod==="Clear"){
 
        temperature_status_photo.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
    }
    else if(tempmmod==="Clouds"){
        temperature_status_photo.innerHTML="<i class='fas fa-cloud' style='color:#00FFFF;'></i>";
    }
    else if(tempmmod==="Rain"){
       temperature_status_photo.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
    }
    else{
        temperature_status_photo.innerHTML="<i class='fas fa-sun' style='color:#accc68;'></i>";
    }

      
     
    } catch {
      city_name.innerText = "Please enter the city name properly";
    }
  }
};

submitBtn.addEventListener("click", getInfo);
