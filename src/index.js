import './sass/main.scss';
import ApiService from './js/apiService.js';
import LoadButton from './js/loadBtn.js';
import imgMarkUp from './templates/image-card.hbs';

const formRef = document.querySelector('.search-form');
const galleryRef = document.querySelector('.gallery');
const loadBtn = new LoadButton({ hidden: true });
const apiService = new ApiService();

formRef.addEventListener('input', searchImg);
loadBtn.loadbtn.addEventListener('click', onLoadBtnClick);

function searchImg(evt) {
    evt.preventDefault();
    apiService.query = evt.currentTarget.elements.query.value;
    if (apiService.query.length >= 2) {
        loadBtn.show();
        apiService.resetPage();
        galleryRef.innerHTML = '';
        apiService.fetchImages()
            .then(imageMarkUp);
    } else {
        galleryRef.innerHTML = '';
        loadBtn.hide();
    }
}

function onLoadBtnClick() {
    apiService.fetchImages()
        .then(imageMarkUp)
        .catch(error => console.log(error));
    apiService.incrementPage;
    setTimeout(() => {
        galleryRef.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        })
    }, 1000);
}

function imageMarkUp(img) {
    galleryRef.insertAdjacentHTML('beforeend', imgMarkUp(img));
}

