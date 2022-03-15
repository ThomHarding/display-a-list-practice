export function renderDogs(dogObject) {
    let dogDiv = document.createElement('div');
    dogDiv.classList.add('dog-item');

    let breedDiv = document.createElement('p');
    breedDiv.textContent = dogObject.breed;
    dogDiv.appendChild(breedDiv);

    let nameDiv = document.createElement('p');
    nameDiv.textContent = dogObject.name;
    dogDiv.appendChild(nameDiv);

    let eyesDiv = document.createElement('p');
    eyesDiv.textContent = dogObject.eyes;
    dogDiv.appendChild(eyesDiv);

    let countriesList = document.createElement('ul');
    for (let country of dogObject.livedCountries) {
        let countryItem = document.createElement('li');
        countryItem.textContent = country;
        countriesList.appendChild(countryItem);
    }
    dogDiv.appendChild(countriesList);

    return dogDiv;
}