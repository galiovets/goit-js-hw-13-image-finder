const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const API_KEY = '24279670-18f1d5dcd53598bcb68823685';

export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    
    fetchImages = () => {
        const url = `${BASE_URL}&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
        return fetch(url)
            .then(resp => resp.json())
            .then(data => {
                this.incrementPage();
                return data.hits;
            });
    }

    incrementPage = () => {
        this.page += 1;
    }

    resetPage = () => {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}