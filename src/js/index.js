import fetchImages from './fetchImages';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ref = {
    form: document.querySelector('#search-form'),
    gallery: document.querySelector('.gallery'),
};

console.log('11111111111111111111111111111111111111');

ref.form.addEventListener('submit', searchImage);

async function searchImage(event) {
    event.preventDefault();
    let query = ref.form.searchQuery.value.trim();
    console.log(query);
    if (query) {
        try {
            const data = await fetchImages(query);
            console.log(data);
            renderList(data.data.hits);
        } catch (error) {
            console.log(error);
        }
    }
}

function renderList(data) {
    const result = data
        .map(
            ({
                webformatURL,
                largeImageURL,
                tags,
                likes,
                views,
                comments,
                downloads,
            }) =>
                `<div class="photo-card">
                    <img src="${webformatURL}" alt="${tags}" loading="lazy" />
                    <div class="info">
                        <p class="info-item">
                            <b>Likes</b>
                            </br>${likes}
                        </p>
                        <p class="info-item">
                            <b>Views</b>
                            </br>${views}
                        </p>
                        <p class="info-item">
                            <b>Comments</b>
                            </br>${comments}
                        </p>
                        <p class="info-item">
                            <b>Downloads</b>
                            </br>${downloads}
                        </p>
                    </div>
                </div>`
        )
        .join('');
    ref.gallery.insertAdjacentHTML('beforeend', result);
}

// function renderCountryData(countryData) {
//     if (countryData.length > 10) {
//         Notify.info(
//             'Too many matches found. Please enter a more specific name.'
//         );
//         return;
//     }

//     if (countryData.length > 1) {
//         ref.countryList.innerHTML = createList(countryData);
//     } else {
//         ref.countryInfo.innerHTML = createInfo(countryData[0]);
//     }
// }

// function searchError(error) {
//     console.log(error);
//     Notify.failure('Oops, there is no country with that name');
// }

// function reset() {
//     ref.countryInfo.innerHTML = '';
//     ref.countryList.innerHTML = '';
// }

// function createList(countries) {
//     const result = countries
//         .map(
//             ({ name, flags }) =>
//                 `<li class="item">
//                 <img alt = "${name.common} flag" src = "${flags.svg}" width="50">
//                 <span>${name.common}</span>
//             </li>`
//         )
//         .join('');
//     return result;
// }

// function createInfo(country) {
//     const { name, flags, capital, population, languages } = country;
//     const langs = Object.values(languages);
//     return `<div class=thumb>
//                 <img alt = "${name.common} flag"
//                     src = "${flags.svg}"
//                     width="100">
//                 <span>${name.common}</span>
//             </div>
//             <p class="prop">Official name:
//                 <span>${name.official}</span>
//             </p>
//             <p class="prop">Capital:
//                 <span>${capital}</span>
//             </p>
//             <p class="prop">Population:
//                 <span>${population}</span>
//             </p>
//             <p class="prop">Langueges:
//                 <span>${langs.toString().replaceAll(',', ', ')}</span>
//             </p>`;
// }
