
fetch('https://restcountries.com/v3.1/capital/{capital}')
.then(response => response.json()) 
.then(data => {
    console.log(data);
});