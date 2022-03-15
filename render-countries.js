export function renderCountries(countryObject) {
    let countryDiv = document.createElement('div');
    countryDiv.classList.add('country-item');

    let namePara = document.createElement('p');
    namePara.textContent = countryObject.name;
    countryDiv.appendChild(namePara);

    let capitalPara = document.createElement('p');
    capitalPara.textContent = countryObject.capital;
    countryDiv.appendChild(capitalPara);

    let populationPara = document.createElement('p');
    populationPara.textContent = countryObject.population + ' Million';
    countryDiv.appendChild(populationPara);

    let leaderPara = document.createElement('p');
    leaderPara.textContent = countryObject.leader.title + ' ' + countryObject.leader.name + ', age ' + countryObject.leader.age;
    countryDiv.appendChild(leaderPara);

    return countryDiv;
}