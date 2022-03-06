const API_key = '6e81de9feade097cff3162d21d6bae28'; 

const searchTemperature = () =>{
    const city = document.getElementById('city-name').value; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then (data => displayTemp(data))
}

const showData = (getId, getData) =>{
    document.getElementById(getId).textContent = ''; 
    document.getElementById(getId).innerText = getData;
    document.getElementById(getId).setAttribute('src', getData);
}

const displayTemp = temp =>{
    showData('city-show-name', temp.name); 
    showData('temperature', temp.main.temp); 
    showData('showing-condition', temp.weather[0].description); 
    // set url icon
    showData('set-icon', `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`); 
}



















