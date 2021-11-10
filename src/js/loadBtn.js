export default class LoadButton {
    constructor({hidden = false}) {
        this.loadbtn = document.querySelector('.load-btn');
        hidden && this.hide();
    };

    show = () => {
        this.loadbtn.classList.remove('is-hidden');
    }

    hide = () => {
        this.loadbtn.classList.add('is-hidden');       
    }
}