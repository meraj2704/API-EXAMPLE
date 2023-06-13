const getCountryInformation = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}
const displayCountry = dat =>{
    const countryContainer = document.getElementById('country-container');
    dat.forEach(country =>
        {
            const countryDiv = document.createElement('div');
            countryDiv.classList.add('country');
            countryDiv.innerHTML = `
            <h1>Name : ${country.name.common} </h1>
            <p> official : ${country.name.official}</p>
            <button onclick="countryDetails('${country.cca2}')">Details</button>
            `
            countryContainer.appendChild(countryDiv);
        })
}
const countryDetails = code =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res =>res.json())
    .then(det => showDetails(det[0]))
}
const showDetails = det =>{
    console.log(det);
    const countryDetail = document.getElementById('country-detail');
    const countryDiv = document.createElement('div');
    countryDiv.innerHTML = `
    <h1> population: ${det.population}</h1>
    `
    countryDetail.appendChild(countryDiv);
}