function getWeather() {

  const apiKey = 'YOUR API KEY HERE';
  const city = document.querySelector('#city').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let MT = Math.round(data.main.temp);
      let FL = Math.round(data.main.feels_like);

      document.querySelector('#location').innerText = `Weather in ${data.name}`;

      document.querySelector('#temperature').innerText = `Temperature: ${MT} C`;
      document.querySelector('#feelslike').innerText = `Feels Like: ${FL} C`;
      document.querySelector('#humidity').innerText = `Humidity: ${data.main.humidity} %`;
      document.querySelector('#wind').innerText = `Wind: ${data.wind.speed} km/h`;
      document.querySelector('#condition').innerText = `Weather Condition: ${data.weather[0].description}`;

      document.querySelector('.weather-info').style.display = 'block';

    })

    .catch((error) => {
      alert('An error occurred while fetching weather data');
      console.error(error);
    });

}