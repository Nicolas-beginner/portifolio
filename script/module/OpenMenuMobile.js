export default class MenuMobileShow {
    constructor(Botao, Elemento) {
        this.button = document.querySelector(Botao)
        this.Elemento = document.querySelector(Elemento)
        this.Open = this.Open.bind(this)
        this.Close = this.Close.bind(this)
        this.IsclickedOutside = this.IsclickedOutside.bind(this)
    }

    Open() {
        this.Elemento.classList.add("ativo")
        this.button.classList.add('ativo')
        this.button.removeEventListener('click', this.Open)
        this.button.addEventListener('click', this.Close)
        setTimeout(() => {
            document.documentElement.addEventListener("click", this.IsclickedOutside)
        }, 800)
    }

    Close() {
        this.Elemento.classList.remove("ativo")
        this.button.classList.remove("ativo")
        this.button.removeEventListener("click", this.Close)
        document.documentElement.removeEventListener("click", this.IsclickedOutside)
        this.init()
    }

    IsclickedOutside({ target }) {
        console.log(target)
        console.log(this.Elemento)
        if (target !== this.Elemento) {
            this.Close()
        }
    }
    init() {
        if (this.button && this.Elemento) {
            this.button.addEventListener('click', this.Open)
        }
    }
}   