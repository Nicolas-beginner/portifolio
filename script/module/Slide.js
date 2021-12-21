export default class Slide {
    constructor(previous, next, ArrayImages, MaxSlide) {
        this.MaxSlide = document.querySelector(MaxSlide)
        this.paragrafoMaxSlide = document.createElement("p")

        this.previousButton = document.querySelector(previous)
        this.nextButton = document.querySelector(next)
        this.ImagesArray = document.querySelectorAll(ArrayImages)
        this.index = 0

        this.MoveSlide = this.MoveSlide.bind(this)
        this.MaxSlideM = this.MaxSlideM.bind(this)
    }

    MoveSlide(Button) {
        if (Button === "next") {
            this.ImagesArray[this.index].classList.remove("ativo")
            this.index >= this.ImagesArray.length - 1 ? this.index = 0 : this.index++
            this.ImagesArray[this.index].classList.add("ativo")

            this.paragrafoMaxSlide.remove()
            this.MaxSlideM()
        }
        if (Button === "previous") {
            this.ImagesArray[this.index].classList.remove("ativo")
            this.index <= 0 ? this.index = this.ImagesArray.length - 1 : this.index--
            this.ImagesArray[this.index].classList.add("ativo")

            this.paragrafoMaxSlide.remove()
            this.MaxSlideM()
        }
    }

    MaxSlideM() {
        this.paragrafoMaxSlide.innerText = `${this.index + 1} de ${this.ImagesArray.length}`
        this.MaxSlide.appendChild(this.paragrafoMaxSlide)
    }

    init() {
        this.MaxSlideM()
        this.previousButton.addEventListener("click", () => this.MoveSlide("previous"))
        this.nextButton.addEventListener("click", () => this.MoveSlide("next"))
    }
}