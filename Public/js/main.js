const submit_button = document.getElementById("submitButton");
const city_name=document.getElementById("cityName");
const outText=document.getElementById("output");

const temper=document.getElementById("asli_temp");
const clouds=document.getElementById("cloud");



const getInfo=async(event)=>{
   event.preventDefault();
   let cityVal=city_name.value;
   if(cityVal===""){
       outText.innerText="Plz enter the name of your city";
   }else{
       try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9fff308d210ba60d6590c42fb75d17d5`;
    const response=await fetch(url);
    const data= await response.json();
    const arr=[data];
          outText.innerText=`${arr[0].name}, ${arr[0].sys.country}`
          temper.innerText=arr[0].main.temp;
          const tempMood=arr[0].weather[0].main;
          
          if(tempMood=="Clear"){
              clouds.innerHTML="<i class='fas fa-sun' style='color: #eccc68;'  ></i>"
          }
          else if(tempMood=="Clouds"){
            clouds.innerHTML="<i class='fas fa-cloud' style='color: #f1f2f6;'  ></i>"
          }
          else if(tempMood=="Rain"){
            clouds.innerHTML="<i class='fas fa-cloud-rain' style='color: #a4b0be;'  ></i>"
          }else{
            clouds.innerHTML="<i class='fas fa-sun' style='color: #f1f2f6;' ></i>"
          }
       }catch{
           outText.innerText="Plz enter your name properly";
       }
   }
}

submit_button.addEventListener('click',getInfo);