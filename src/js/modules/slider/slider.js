export default class Slider {
// пустые строки и объект для избежания ошибок
    constructor({
        container = null,
        btns = null, 
        next = null, 
        prev = null,
        activeClass = '',
        animate,
        autoplay
        } = {}) {
        this.container = document.querySelector(container);
        try {this.slides = this.container.children;} catch(e){};
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
    }


}